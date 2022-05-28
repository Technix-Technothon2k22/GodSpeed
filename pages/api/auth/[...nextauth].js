import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/auth/sign-in',
    error: '/auth/error',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});
