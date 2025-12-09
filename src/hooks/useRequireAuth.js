"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function useRequireAuth({ redirectTo = "/auth/login", requireRole = null } = {}) {
  const { user, loading } = useSelector((s)=>s.auth);
  const profile = useSelector((s)=>s.profile);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace(redirectTo);
        return;
      }
      if (requireRole && profile.role !== requireRole) {
        router.replace("/unauthorized");
      }
    }
  }, [user, loading, profile, requireRole, router]);

  return { user, profile, loading };
}
