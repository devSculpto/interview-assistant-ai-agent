import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",

  //edited ------------->
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  // Add this line to fix the API URL
  baseUrl: "https://api.stack-auth.com", // NOT app.stack-auth.com

  //edited till here ---------------->
});
