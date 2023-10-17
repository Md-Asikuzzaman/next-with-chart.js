import axios from 'axios';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Email Address',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },

      async authorize(credentials, req) {
        if (credentials?.email && credentials?.password) {
          const res = await axios.post(
            'https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io/auth/api/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          if (!res) {
            return null;
          }

          const user = {
            id: Math.random().toString(),
            email: credentials?.email,
          };

          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: '/signin',
  },

  secret: process.env.NEXTAUTH_SECRET,
};
