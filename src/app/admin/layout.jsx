"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    if (session?.user.role !== "admin") router.push("/");
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="p-6 w-full">{children}</main>
    </div>
  );
}
