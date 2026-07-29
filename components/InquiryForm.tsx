"use client";

import { useState } from "react";

export default function InquiryForm({
  subject,
  roleOptions,
  submitLabel = "Send Inquiry",
}: {
  subject: string;
  roleOptions?: string[];
  submitLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(roleOptions?.[0] ?? "");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(roleOptions ? [`I am a: ${role}`] : []),
      "",
      message,
    ];
    const mailSubject = encodeURIComponent(`${subject} — ${name}`);
    const mailBody = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@houseofsundus.com?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
          Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
        />
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
        />
      </div>
      {roleOptions && (
        <div>
          <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
            I am a
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
          >
            {roleOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="text-[11px] uppercase tracking-[0.15em] text-muted">
          Message
        </label>
        <textarea
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[14px] outline-none focus:border-ink"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ink py-3.5 text-[12px] uppercase tracking-[0.15em] text-white hover:bg-ink/90"
      >
        {submitLabel}
      </button>
    </form>
  );
}
