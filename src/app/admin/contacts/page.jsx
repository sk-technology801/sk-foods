"use client";
import { useEffect, useState } from "react";
import ContactTable from "@/components/ContactTable";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Contacts</h1>
      <ContactTable contacts={contacts} />
    </div>
  );
}
