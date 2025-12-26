"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { apiFetch } from "@/lib/apiFetch";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string | null;
  onboardingCompleted?: boolean;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => void;
  loginManual: (payload: LoginManualPayload) => Promise<void>;
};

type LoginManualPayload = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  
  const loginManual = async ({ email, password }: LoginManualPayload) => {
    setLoading(true);

    try {
      const res = await apiFetch<{
        accessToken: string;
        user: User;
      }>("/user/login", {
        method: "POST",
        data: JSON.stringify({ email, password }),
      });

      localStorage.setItem("access_token", res.accessToken);
      setUser(res.user);

      redirectAfterLogin(res.user);
    } finally {
      setLoading(false);
    }
  };

  const redirectAfterLogin = (user: User) => {
    if (user.onboardingCompleted) {
      router.replace("/dashboard");
    } else {
      router.replace("/onboarding");
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    signOut({ callbackUrl: "/login" });
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, loginManual, }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * ✅ Hook
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
