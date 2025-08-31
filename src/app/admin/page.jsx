"use client";
import { useSession, signOut } from "next-auth/react";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Access Denied. Please log in first.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p>Welcome, {session.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-600 text-white px-4 py-2 mt-4"
      >
        Logout
      </button>
    </div>
  );
}
