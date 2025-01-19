import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  try {
    const authResult = await auth();
    const userId = authResult.userId;

    if (!userId) {
      throw new Error("User not logged in");
    }

    return userId;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error("Failed to authenticate user");
  }
};

export const ourFileRouter = {
  photo: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const userId = await handleAuth(); 
      return { userId };
    })
    .onUploadComplete(() => {
      console.log("Upload complete!");
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
