// src/lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === "admin@site.com" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@site.com",
            role: "admin",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // store role in token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role; // expose role in session
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
