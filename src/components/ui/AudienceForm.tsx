export const prerender = false; // Not needed in 'server' mode

import { useState, useRef } from "react";
import type { FormEvent } from "react";

export default function AudienceForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log({ formData });
    const response = await fetch("/api/add-contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    } else if (data.success) {
      setResponseMessage("Takk fyrir! Þú ert kominn á listann.");
      // Clear the form
      formRef.current?.reset();
    } else if (data.error) {
      setResponseMessage(data.error);
    }
  }

  return (
    <div>
      <form
        onSubmit={submit}
        className="bg-[#292A32] px-8 py-7 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center"
      >
        <div className="w-full sm:w-[55%]">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Nafn"
            required
            className="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none mb-3"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Netfang"
            required
            className="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"
          />
        </div>
        <button className="w-full sm:w-[45%] btn-tertiary">Fylgjast með</button>
      </form>
      {responseMessage && <p className="mt-2">{responseMessage}</p>}
    </div>
  );
}
