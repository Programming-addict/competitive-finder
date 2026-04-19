'use client';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '@/app/lib/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  // Redirect to home if already logged in
  if (!loading && user) {
    router.push('/');
  }

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      setError('');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Save user data to Firestore
      if (result.user) {
        const userDocRef = doc(db, 'users', result.user.uid);
        const userDocSnap = await getDoc(userDocRef);
        
        // Only create user doc if it doesn't exist (first login)
        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            name: result.user.displayName || '',
            email: result.user.email || '',
            photoURL: result.user.photoURL || '',
            createdAt: new Date().toISOString(),
          });
        }
      }
      
      router.push('/');
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
      console.error('Sign in error:', err);
    } finally {
      setIsSigningIn(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0d9488] mx-auto mb-4"></div>
          <p className="text-[#2a3433]/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6faf8] to-[#e7f0ed] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#0d9488] font-headline mb-2">
              The Nurturing Atelier
            </h1>
            <p className="text-[#2a3433]/60">Competition Finder</p>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2a3433] mb-2">Welcome Back</h2>
            <p className="text-[#2a3433]/60">Sign in to your account to continue</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isSigningIn}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-[#2a3433] font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#1f2937"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/>
            </svg>
            {isSigningIn ? 'Signing in...' : 'Sign in with Google'}
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#2a3433]/60">Or continue as guest</span>
            </div>
          </div>

          {/* Guest Button */}
          <button
            onClick={() => router.push('/')}
            className="w-full bg-[#0d9488]/10 text-[#0d9488] font-semibold py-3 px-4 rounded-lg hover:bg-[#0d9488]/20 active:scale-95 transition-all"
          >
            Browse as Guest
          </button>

          {/* Footer Text */}
          <p className="text-center text-sm text-[#2a3433]/60 mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="text-[#0d9488] hover:underline font-semibold">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#0d9488] hover:underline font-semibold">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
