import React from "react";
import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { UpdateButton, DeleteButton } from "./button";

const ContactTable = async ({query, currentPage}:{query:string; currentPage:number}) => {
  const contacts = await getContacts(query, currentPage);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <th>{index + 1}</th>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{formatDate(contact.createdAt.toString())}</td>
              <td className="flex justify-start gap-2">
                <UpdateButton id={contact.id}/>
                <DeleteButton id={contact.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
