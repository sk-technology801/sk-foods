"use client";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <a href="/admin" className="hover:text-blue-400">Dashboard</a>
        <a href="/admin/contacts" className="hover:text-blue-400">Contacts</a>
        <a href="/admin/settings" className="hover:text-blue-400">Settings</a>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-6 text-left hover:text-red-400"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
