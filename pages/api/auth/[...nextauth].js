import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_ID
  const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error("Missing ClientId for Google credentials");
  }
  if(!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing ClientSecret for Google credentials");
  }
  return { clientId, clientSecret };
}

function getGithubCredentials() {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_ID
  const clientSecret = process.env.NEXT_PUBLIC_GITHUB_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error("Missing ClientId for Github credentials");
  }
  if(!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing ClientSecret for Github credentials");
  }
  return { clientId, clientSecret };
}

function getDiscordCredentials() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_ID
  const clientSecret = process.env.NEXT_PUBLIC_DISCORD_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error("Missing ClientId for Discord credentials");
  }
  if(!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing ClientSecret for Discord credentials");
  }
  return { clientId, clientSecret };
}

export const authOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    DiscordProvider({
      clientId: getDiscordCredentials().clientId,
      clientSecret: getDiscordCredentials().clientSecret,
    }),
    GithubProvider({
      clientId: getGithubCredentials().clientId,
      clientSecret: getGithubCredentials().clientSecret,
    }),
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
