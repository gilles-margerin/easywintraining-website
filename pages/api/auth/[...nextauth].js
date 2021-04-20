import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    async session(session, token) {
      session.user.isAdmin = token.isAdmin;
      session.user.id = token.sub;
      return session;
    },
  },
});
