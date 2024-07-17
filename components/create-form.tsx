"use client";

import { saveContact } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <div>
        <form action={formAction} className="grid gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <div
              className="id"
              id="name-error"
              aria-alive="polite"
              aria-atomic="true"
            >
              <p className="text-red-500">{state?.Error?.name}</p>
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <div
              className="id"
              id="phone-error"
              aria-alive="polite"
              aria-atomic="true"
            >
              <p className="text-red-500">{state?.Error?.phone}</p>
            </div>
          </label>
          <div
            className="id"
            id="message-error"
            aria-alive="polite"
            aria-atomic="true"
          >
            <p className="text-red-500">{state?.message}</p>
          </div>
          <SubmitButton label="save" />
        </form>
    </div>
  );
};

export default CreateForm;
