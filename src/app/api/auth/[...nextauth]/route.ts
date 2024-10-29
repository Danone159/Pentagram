// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "./authOptions"; // Uisti sa, že tu je správny názov

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
