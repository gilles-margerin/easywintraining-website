import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import crypto from 'crypto'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],

  session: {
    jwt: true,
  },

  debug: true
})