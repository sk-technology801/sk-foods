"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: true, callbackUrl: "/admin" });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="p-6 border rounded-lg bg-white shadow-md">
        <h1 className="text-xl mb-4 font-bold">Admin Login</h1>
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-full"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 mb-2 w-full"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
