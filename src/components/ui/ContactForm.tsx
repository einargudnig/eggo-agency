export const prerender = false;

import decorForm from "../../assets/pics/contact-pic.png";
import { useState, useRef } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log({ formData });
    const response = await fetch("/api/contact-form", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    } else if (data.success) {
      setResponseMessage(
        "Takk fyrir fyrir að hafa samband! Við munum svara þér í tölvupósti",
      );
      // Clear the form
      formRef.current?.reset();
    } else if (data.error) {
      setResponseMessage(data.error);
    }
  }

  return (
    <div className="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden">
      <form
        onSubmit={submit}
        className="bg-gray sm:p-6 h-full w-full lg:max-w-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-black mb-2">
            Nafn*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Netfang*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-black mb-2">
            Skilaboð*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          ></textarea>
        </div>

        <button className="btn-primary w-full">Hafa samband</button>
        {responseMessage && <p className="mt-2">{responseMessage}</p>}
      </form>
      <div className="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block">
        <img src={decorForm.src} alt="decor" />
      </div>
    </div>
  );
}
// <style>
//   .form-checkbox {
//     appearance: none;
//     width: 28px;
//     height: 28px;
//     border: 1px solid #000;
//     border-radius: 50%;
//     outline: none;
//     cursor: pointer;
//     position: relative;
//   }

//   .form-checkbox:before {
//     content: "";
//     display: block;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background: var(--green);
//     transform: scale(0);
//     transition: transform 0.1s ease-in-out;
//   }

//   .form-checkbox:checked:before {
//     transform: scale(0.6);
//   }
// </style>
// <script>
//   function formSetup() {
//     var cb1 = document.getElementById("checkbox1") as HTMLInputElement;
//     var cb2 = document.getElementById("checkbox2") as HTMLInputElement;
//     var message = document.getElementById("message") as HTMLInputElement;

//     if (cb1 && cb2) {
//       cb1.checked = true;

//       cb2.addEventListener("change", function () {
//         if (cb2.checked) {
//           cb1.checked = false;
//           message.value =
//             "We're interested in your services! Please contact us";
//         } else {
//           message.value = "";
//           cb1.checked = true;
//         }
//       });
//       cb1.addEventListener("change", function () {
//         if (cb1.checked) {
//           cb2.checked = false;
//           message.value = "";
//         } else {
//           cb2.checked = true;
//           message.value =
//             "We're interested in your services! Please contact us";
//         }
//       });
//     }
//   }

//   formSetup();
//   document.addEventListener("astro:after-swap", formSetup);
// </script>
