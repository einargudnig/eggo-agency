import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("firstName");
    const email = data.get("email");
    const message = data.get("message");

    // Ensure values are strings (not File)
    const nameStr = typeof name === "string" ? name : undefined;
    const emailStr = typeof email === "string" ? email : undefined;
    const messageStr = typeof message === "string" ? message : undefined;

    console.log(emailStr, nameStr);

    // Validate required fields
    if (!emailStr || !nameStr) {
      return new Response(
        JSON.stringify({ error: "Email and name are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Add contact to Resend audience
    const response = await resend.emails.send({
      from: emailStr,
      to: "eggo@eggo.is",
      subject: "Contact Form Submission",
      html: `<p>Name: ${nameStr}</p><p>Email: ${emailStr}</p><p>Message: ${messageStr}</p>`,
    });

    // Send email to user
    // const confirmation = await resend.emails.send({
    //   from: "eggo@eggo.is",
    //   to: emailStr,
    //   subject: "Takk!",
    //   html: "<p>Takk fyrir að skrá þig</p>",
    //   // react: <NewsletterConfirm firstName={firstNameStr} />,
    // });

    return new Response(JSON.stringify({ success: true, response }), {
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
