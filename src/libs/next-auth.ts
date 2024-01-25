import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from './prisma-adapter'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,

      profile: (profile: GithubProfile) => {
        // maps NextAuth fields to profile returned by GithubProfile
        return {
          id: profile.id.toString(),
          name: profile.name as string,
          email: profile.email as string,
          avatar_url: profile.avatar_url,
        }
      },

      allowDangerousEmailAccountLinking: true,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      profile: (profile: GoogleProfile) => {
        // maps NextAuth fields to profile returned by GoogleProfile

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar_url: profile.picture,
        }
      },

      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },

      allowDangerousEmailAccountLinking: true,
    }),
  ],

  callbacks: {
    async signIn({ account }) {
      if (!account) return '/?error=permissions'

      return true
    },

    async session({ session, user }) {
      return {
        ...session,
        user, // all informations of created user
      }
    },
  },
}
