import CreateForm from "@/components/create-form";
import React from "react";

const CreateContactPage = () => {
  return (
    <div className="m-12">
        <h1 className="text-xl text-center">Add New Contact</h1>
      <CreateForm />
    </div>
  );
};

export default CreateContactPage;
