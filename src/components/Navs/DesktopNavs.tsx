"use client";

import { auth } from "@/lib/firebase";
import { useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { Button } from "../ui/button";

const DesktopNavs = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  const [signOut, signOutLoading, signOutError] = useSignOut(auth);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (loading || signOutLoading) {
    return (
      <p className="text-black text-center text-2xl my-4 font-bold">
        Loading...
      </p>
    );
  }

  const isNewUser =
    currentUser &&
    currentUser.metadata.creationTime === currentUser.metadata.lastSignInTime;

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (!success) {
        alert("Logout failed. Please try again.");
      }
    } catch (err) {
      console.error("Error logging out: ", err);
      alert("Logout error. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result) {
        alert("Sign-in was cancelled or failed.");
      }
    } catch (error) {
      console.error("Google Sign-in error:", error);
      alert("Sign-in failed or was cancelled.");
    }
  };

  return (
    <div className="flex justify-between items-center shadow-2xl p-4 bg-gray-150">
      {/* Left side: Text Logo */}
      <div className="text-orange-500 text-xl font-bold">Kiran Sur</div>

      {/* Right side: Auth buttons or welcome message */}
      <div className="flex items-center gap-4">
        {currentUser ? (
          <>
            <p className="text-black font-bold text-xl">
              {isNewUser
                ? `Welcome, ${currentUser.displayName}`
                : `Welcome back, ${currentUser.displayName}`}
            </p>
            <Button
              onClick={handleLogout}
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleGoogleLogin}
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Login
            </Button>
            <Button onClick={handleGoogleLogin}>Signup</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopNavs;
