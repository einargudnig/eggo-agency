import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, firstName } = body;
    console.log(email, firstName);

    // Validate required fields
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Add contact to Resend audience
    const contact = await resend.contacts.create({
      email,
      firstName: firstName || "",
      unsubscribed: false,
      audienceId: import.meta.env.AUDIENCE_ID,
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
