"use client"
import { SignUp, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page() {
  const { isLoaded, userId } = useAuth();  
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      
      router.push('/home/places');
    }
  }, [isLoaded, userId, router]);

  return <SignUp />;
}
