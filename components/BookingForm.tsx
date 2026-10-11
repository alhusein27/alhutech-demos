"use client";

import { useState } from "react";
import type { DemoContent, FormField } from "@/content/types";
import { waLink } from "@/lib/whatsapp";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none";

function Field({ field, value, onChange, error }: { field: FormField; value: string; onChange: (v: string) => void; error?: string }) {
  const id = `field-${field.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  const common = {
    id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => onChange(e.target.value),
    placeholder: field.placeholder,
    className: `${inputClass} ${error ? "border-red-400" : ""}`,
    "aria-invalid": !!error,
  };
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-700">
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
      </label>
      {field.type === "select" ? (
        <select {...common} required={field.required}>
          <option value="">Select…</option>
          {(field.options ?? []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea {...common} rows={3} required={field.required} />
      ) : (
        <input {...common} type={field.type} required={field.required} />
      )}
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

export default function BookingForm({ content }: { content: DemoContent }) {
  const form = content.form;
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  if (!form) return null;

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    form.fields.forEach((f) => {
      const v = (values[f.label] ?? "").trim();
      if (f.required && !v) {
        next[f.label] = "This field is required.";
      } else if (v && f.type === "tel" && !/^[+\d][\d\s\-()]{5,}$/.test(v)) {
        next[f.label] = "Please enter a valid phone number.";
      } else if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        next[f.label] = "Please enter a valid email address.";
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const lines = form.fields
      .map((f) => ({ label: f.label, value: (values[f.label] ?? "").trim() }))
      .filter((entry) => entry.value)
      .map((entry) => `${entry.label}: ${entry.value}`);
    const message = `Hello ${content.businessName}! ${form.title}:\n${lines.join("\n")}`;
    window.open(waLink(content.whatsapp, message), "_blank", "noopener");
  };

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">{form.title}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{form.subtitle}</p>
      <div className="mt-6 space-y-4">
        {form.fields.map((field) => (
          <Field
            key={field.label}
            field={field}
            value={values[field.label] ?? ""}
            onChange={(v) => setValues((s) => ({ ...s, [field.label]: v }))}
            error={errors[field.label]}
          />
        ))}
      </div>
      <button
        type="submit"
        className="btn-accent mt-6 w-full rounded-full px-6 py-3.5 font-semibold text-white shadow-md hover:opacity-90 transition"
      >
        {form.buttonLabel}
      </button>
      {form.note && <p className="mt-4 text-center text-xs text-slate-500">{form.note}</p>}
    </form>
  );
}
