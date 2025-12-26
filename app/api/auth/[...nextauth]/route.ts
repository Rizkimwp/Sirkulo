import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      // Hanya saat login pertama
      if (account?.id_token) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: account.id_token,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to sync Google login");
        }

        const data = await res.json();

        token.accessToken = data.accessToken;
        token.user = data.user;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
