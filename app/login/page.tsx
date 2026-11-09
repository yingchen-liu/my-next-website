import type { Metadata } from "next";
import LoginPage from "../components/Login/LoginPage";

export const metadata: Metadata = {
  title: "Login",
  description: "Private login for expanded resume access on yingchenliu.com.",
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginRoute() {
  return (
    <main>
      <LoginPage />
    </main>
  );
}
