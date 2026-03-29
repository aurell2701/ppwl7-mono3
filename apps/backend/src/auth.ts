import { google } from "googleapis";

export function createOAuthClient() {
  const REDIRECT_URI = "https://monorepo-be-flame.vercel.app/auth/callback";
  
  console.log("MANUAL REDIRECT:", REDIRECT_URI);
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  );
}

export function getAuthUrl(oauth2Client: InstanceType<typeof google.auth.OAuth2>) {
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/classroom.courses.readonly",
      "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
      "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    prompt: "consent",
  });
}