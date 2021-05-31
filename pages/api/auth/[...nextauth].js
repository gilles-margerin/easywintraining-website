import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    async session(session, token) {
      session.user.id = token.sub;
      return session;
    },
  },
});
