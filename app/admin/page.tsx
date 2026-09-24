"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndex() {
  const router = useRouter();
  useEffect(() => {
    const session = localStorage.getItem("mk_admin_session");
    if (session) {
      try {
        const parsed = JSON.parse(session);
        if (parsed.authenticated) { router.replace("/admin/dashboard"); return; }
      } catch { /* ignore */ }
    }
    router.replace("/admin/login");
  }, [router]);
  return null;
}
