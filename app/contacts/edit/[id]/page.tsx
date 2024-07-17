
import UpdateForm from "@/components/edit-form";
import { notFound } from "next/navigation";
import { getContactById } from "@/lib/data";
import React from "react";

const UpdateContactPage = async ({params}: {params:{id:string}}) => {
    const id = params.id;
    const contact = await getContactById(id);
    if(!contact) {
        notFound();
    }
  return (
    <div className="m-12">
        <h1 className="text-xl text-center">Update Contact</h1>
        <UpdateForm contact = {contact}/>
    </div>
  );
};

export default UpdateContactPage;
