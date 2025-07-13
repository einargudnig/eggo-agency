import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const firstName = data.get("firstName");
    const email = data.get("email");

    // Ensure values are strings (not File)
    const firstNameStr = typeof firstName === "string" ? firstName : undefined;
    const emailStr = typeof email === "string" ? email : undefined;

    console.log(emailStr, firstNameStr);

    // Validate required fields
    if (!emailStr || !firstNameStr) {
      return new Response(
        JSON.stringify({ error: "Email and name are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Add contact to Resend audience
    const contact = await resend.contacts.create({
      firstName: firstNameStr,
      email: emailStr,
      unsubscribed: false,
      audienceId: import.meta.env.AUDIENCE_ID,
    });

    // Send email to user
    const confirmation = await resend.emails.send({
      from: "eggo@eggo.is",
      to: emailStr,
      subject: "Takk!",
      html: "<p>Takk fyrir að skrá þig</p>",
      // react: <NewsletterConfirm firstName={firstNameStr} />,
    });

    return new Response(JSON.stringify({ success: true, contact }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding contact:", error);
    return new Response(JSON.stringify({ error: "Failed to add contact" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
