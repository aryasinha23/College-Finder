"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          College Application Form
        </h1>

        <p className="text-gray-700 mb-8">
          Fill in your details to apply.
        </p>

        <form
  className="space-y-5"
 onSubmit={async (e) => {
  alert("Form Submitted");
  e.preventDefault();

  const formData = {
    name: (
      document.querySelector(
        'input[type="text"]'
      ) as HTMLInputElement
    ).value,

    email: (
      document.querySelector(
        'input[type="email"]'
      ) as HTMLInputElement
    ).value,

    phone: (
      document.querySelector(
        'input[type="tel"]'
      ) as HTMLInputElement
    ).value,

    course: (
      document.querySelector(
        "select"
      ) as HTMLSelectElement
    ).value,
  };

  const response = await fetch("/api/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (result.success) {
    setSubmitted(true);
    alert("Application Submitted Successfully!");
  }
}}
>

          <div>
            <label className="block font-semibold mb-2 text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-900">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-900">
              Course
            </label>
            <select className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-white">
              <option>B.Tech</option>
              <option>MBA</option>
              <option>MBBS</option>
              <option>BA LLB</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>

        {submitted && (
        <div className="mt-4 rounded-xl bg-green-100 p-4 text-center text-green-700 font-bold">
    ✅ Application Submitted Successfully!
    <br />
    We will contact you soon.
  </div>
)}
        </form>
      </div>
    </main>
  );
}