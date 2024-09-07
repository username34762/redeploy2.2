"use client"
import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isLoaded, userId } = useAuth();  
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      
      router.push("/home/places");
    }
  }, [isLoaded, userId, router]);

  return <SignIn />;
}
