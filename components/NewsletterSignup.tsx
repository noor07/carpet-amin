"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(
      `Please add ${email} to the SUNDUS newsletter list.`
    );
    window.location.href = `mailto:info@houseofsundus.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
        Join Our List
      </div>
      <div className="flex">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full border border-line bg-transparent px-4 py-2.5 text-[13px] outline-none focus:border-ink"
        />
        <button
          type="submit"
          className="shrink-0 border border-l-0 border-line px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] hover:border-ink hover:bg-ink hover:text-white"
        >
          Join
        </button>
      </div>
    </form>
  );
}
