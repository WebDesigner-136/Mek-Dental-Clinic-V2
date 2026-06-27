"use client";

import { useState, type FormEvent } from "react";
import { CLINIC, SERVICES } from "@/lib/site";
import { Button } from "./Button";
import { Shell, Core } from "./Primitives";

const PHONE_REGEX = /^(70|71|76|78|79|81)\d{6}$/;

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "");
    const date = String(fd.get("date") || "");
    const time = String(fd.get("time") || "");
    const notes = String(fd.get("notes") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please share your name.";
    if (!PHONE_REGEX.test(phone)) nextErrors.phone = "Lebanese mobile, e.g. 71 349 369 (no spaces).";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) nextErrors.email = "A valid email helps us confirm.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      `Hi Mek Dental Clinic 👋 I'd like to book an appointment.`,
      ``,
      `Name: ${name}`,
      `Phone: +961 ${phone}`,
      `Email: ${email}`,
      service && `Service: ${service}`,
      date && `Preferred date: ${date}`,
      time && `Preferred time: ${time}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`${CLINIC.whatsappBase}?text=${msg}`, "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 py-3.5 text-[color:var(--color-ink)] outline-none transition-colors placeholder:text-[color:var(--color-ink-muted-sm)] focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/15";

  return (
    <Shell>
      <Core className="p-6 sm:p-10">
        <form onSubmit={onSubmit} noValidate className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" error={errors.name}>
              <input name="name" type="text" className={inputCls} placeholder="Your name" required />
            </Field>
            <Field label="Phone (Lebanon)" error={errors.phone}>
              <div className="flex items-stretch overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] focus-within:border-[color:var(--color-accent)] focus-within:ring-2 focus-within:ring-[color:var(--color-accent)]/15">
                <span className="grid place-items-center bg-[color:var(--color-canvas-alt)] px-4 font-mono text-sm text-[color:var(--color-ink-muted-sm)]">+961</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  className="w-full bg-transparent px-4 py-3.5 outline-none"
                  placeholder="71349369"
                  required
                />
              </div>
            </Field>
          </div>

          <Field label="Email" error={errors.email}>
            <input name="email" type="email" className={inputCls} placeholder="you@example.com" required />
          </Field>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Service">
              <select name="service" className={inputCls} defaultValue="">
                <option value="" disabled>Choose a service</option>
                {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                <option value="General Checkup">General Checkup</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </Field>
            <Field label="Preferred Date">
              <input name="date" type="date" className={inputCls} />
            </Field>
            <Field label="Preferred Time">
              <select name="time" className={inputCls} defaultValue="">
                <option value="" disabled>Choose a window</option>
                <option>Morning 9–12</option>
                <option>Afternoon 12–4</option>
                <option>Evening 4–7</option>
              </select>
            </Field>
          </div>

          <Field label="Additional Notes (optional)">
            <textarea
              name="notes"
              rows={4}
              className={inputCls}
              placeholder="Anything you'd like Dr. Karam to know in advance."
            />
          </Field>

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[color:var(--color-ink-muted-sm)]">
              Submitting opens WhatsApp with your details pre-filled. Faster than email.
            </p>
            <Button type="submit" size="lg">Send My Request</Button>
          </div>
        </form>
      </Core>
    </Shell>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted-sm)]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs font-medium" style={{ color: "var(--color-warn)" }}>
          {error}
        </span>
      )}
    </label>
  );
}
