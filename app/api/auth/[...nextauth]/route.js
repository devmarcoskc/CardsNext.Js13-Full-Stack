import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    ],
    callbacks: {
      async session({ session }) {
        // store the user id from MongoDB to session
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
  
        return session;
      },
      async signIn({profile}) {
        try {
          await connectToDB();
  
          const userExists = await User.findOne({ email: profile.email });

          const generateUsername = (name) => {
            const sanitizedName = name.replace(/\s/g, "").toLowerCase();
            const maxLength = 20;
            return sanitizedName.substring(0, maxLength);
          };
  
          if (!userExists) {
            const username = generateUsername(profile.name);
            await User.create({
              email: profile.email,
              username: username,
              image: profile.picture,
            });
          }
  
          return true
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false
        }
      },
    }
  })
  
  export { handler as GET, handler as POST }