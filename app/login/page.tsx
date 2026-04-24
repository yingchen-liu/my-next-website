import type { Metadata } from "next";
import LoginPage from "../components/Login/LoginPage";

export const metadata: Metadata = {
  title: "Login - Yingchen Liu | Senior Full-Stack Engineer",
};

export default function LoginRoute() {
  return <LoginPage />;
}
