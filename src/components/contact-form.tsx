"use client";

import { useActionState } from "react";
import { sendContact } from "@/lib/actions";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ActionButton } from "./ui/action-button";
import { ArrowRightIcon } from "./ui/icons";

interface ContactFormProps {
  form: Record<string, string>;
  successMessage: string;
}

export function ContactForm({ form, successMessage }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContact, null);

  return (
    <form action={formAction} className="w-full max-w-3xl flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input type="text" name="name" placeholder={form.name} className="bg-white" />
        <Input type="text" name="company" placeholder={form.company} className="bg-white" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input type="email" name="email" placeholder={form.email} className="bg-white" />
        <Input type="tel" name="phone" placeholder={form.phone} className="bg-white" />
      </div>
      <Textarea name="message" rows={6} placeholder={form.message} className="bg-white" />
      <ActionButton label={form.submit} icon={<ArrowRightIcon />} disabled={pending} />
      {state?.success && (
        <span className="text-green-600 text-sm text-center font-medium">
          {successMessage}
        </span>
      )}
      {state?.message && !state.success && (
        <span className="text-red-500 text-sm text-center">
          {state.message}
        </span>
      )}
    </form>
  );
}
