"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseAuth, hasFirebaseConfig } from "@/lib/firebase/client";

const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white bg-white px-5 py-4 font-sfmono text-sm text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-100 disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-300";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-2xl border border-white border-opacity-15 px-4 py-3 font-sfmono text-sm text-blue-100 transition hover:border-blue-200 hover:text-white";

function GoogleMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.81 10.04H12v3.92h5.64c-.24 1.26-.96 2.32-2.04 3.04v2.52h3.31c1.94-1.78 3.05-4.41 3.05-7.52 0-.67-.05-1.32-.15-1.96Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.76 0 5.07-.91 6.76-2.48l-3.31-2.52c-.92.62-2.1.98-3.45.98-2.65 0-4.89-1.79-5.69-4.19H2.9v2.6A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.31 13.79A5.99 5.99 0 0 1 6 12c0-.62.11-1.22.31-1.79V7.61H2.9A10 10 0 0 0 2 12c0 1.62.39 3.15 1.08 4.39l3.23-2.6Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.98c1.5 0 2.85.52 3.91 1.53l2.93-2.93C17.06 2.94 14.75 2 12 2a10 10 0 0 0-9.1 5.61l3.41 2.6c.8-2.41 3.04-4.23 5.69-4.23Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function getErrorMessage(error: unknown) {
  const code =
    typeof error === "object" && error && "code" in error
      ? String(error.code)
      : null;

  switch (code) {
    case "auth/popup-blocked":
      return "The browser blocked the Google popup. Allow popups for this site and try again.";
    case "auth/popup-closed-by-user":
      return "The Google popup was closed before sign-in completed.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized in Firebase Authentication yet.";
    case "auth/operation-not-allowed":
      return "Google sign-in is not enabled in Firebase Authentication.";
    default:
      return "Google sign-in failed. Check the Firebase Google provider and authorized domains.";
  }
}

function getInitials(user: User | null) {
  if (!user?.displayName) {
    return "G";
  }

  const [first = "", second = ""] = user.displayName.split(" ");
  return `${first.charAt(0)}${second.charAt(0)}`.trim().toUpperCase() || "G";
}

function LoginPage() {
  const firebaseReady = hasFirebaseConfig();

  const [authLoaded, setAuthLoaded] = useState(!firebaseReady);
  const [user, setUser] = useState<User | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (!firebaseReady) {
      return;
    }

    const auth = getFirebaseAuth();
    if (!auth) {
      setAuthLoaded(true);
      return;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthLoaded(true);
    });
  }, [firebaseReady]);

  async function handleSignIn() {
    const auth = getFirebaseAuth();
    if (!auth) {
      setErrorMessage("Firebase is not configured yet. Add your web app env vars first.");
      return;
    }

    try {
      setIsSigningIn(true);
      setErrorMessage(null);
      setStatusMessage(null);

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      await signInWithPopup(auth, provider);
      setStatusMessage("Signed in with Google.");
    } catch (error) {
      console.error(error);
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSigningIn(false);
    }
  }

  async function handleSignOut() {
    const auth = getFirebaseAuth();
    if (!auth) {
      return;
    }

    try {
      await signOut(auth);
      setStatusMessage("Signed out.");
      setErrorMessage(null);
    } catch (error) {
      console.error(error);
      setErrorMessage("Could not sign out. Refresh the page and try again.");
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-cyan-300/8 blur-3xl" />
        <div className="absolute right-[-12%] top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-100/5 blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        <div className="rounded-[32px] border border-white border-opacity-10 bg-gray-950/75 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white border-opacity-10 bg-gray-900/75">
            {user?.photoURL ? (
              <div
                aria-label={user.displayName ?? "Signed-in user"}
                className="h-full w-full rounded-2xl bg-cover bg-center"
                role="img"
                style={{ backgroundImage: `url(${user.photoURL})` }}
              />
            ) : (
              <span className="font-sfmono text-xl text-blue-100">
                {getInitials(user)}
              </span>
            )}
          </div>

          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-white">Login</h1>
            <p className="mt-3 text-base leading-7 text-blue-100 text-opacity-70">
              Sign in with your Google account to continue.
            </p>
          </div>

          {!firebaseReady ? (
            <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-200/10 p-5 text-center">
              <p className="font-sfmono text-sm text-amber-100">
                Firebase config missing
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-100 text-opacity-75">
                Add your `NEXT_PUBLIC_FIREBASE_*` values to `.env.local` and reload this page.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-8 rounded-2xl border border-white border-opacity-10 bg-gray-900/70 p-5 text-center">
                <p className="font-sfmono text-xs uppercase tracking-[0.24em] text-blue-100 text-opacity-45">
                  Account
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {user?.displayName ?? "Not signed in"}
                </p>
                <p className="mt-2 break-words text-sm text-blue-100 text-opacity-60">
                  {user?.email ?? "Use Google to sign in"}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {!authLoaded ? (
                  <div className="rounded-2xl border border-white border-opacity-10 bg-gray-900/50 px-5 py-4 text-center font-sfmono text-sm text-blue-100 text-opacity-65">
                    Restoring session...
                  </div>
                ) : user ? (
                  <button
                    className={primaryButtonClass}
                    onClick={handleSignOut}
                    type="button"
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    className={primaryButtonClass}
                    disabled={isSigningIn}
                    onClick={handleSignIn}
                    type="button"
                  >
                    <GoogleMark />
                    {isSigningIn ? "Opening Google..." : "Continue with Google"}
                  </button>
                )}
              </div>

              {statusMessage ? (
                <p className="mt-4 text-center text-sm text-emerald-200">{statusMessage}</p>
              ) : null}

              {errorMessage ? (
                <p className="mt-4 text-center text-sm text-red-300">{errorMessage}</p>
              ) : null}
            </>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link className={secondaryButtonClass} href="/">
            Back Home
          </Link>
          <Link className={secondaryButtonClass} href="/resume">
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
