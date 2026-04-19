'use client';

import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6faf8]/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0px_4px_24px_rgba(42,52,51,0.06)]">
      <div className="flex items-center gap-8">
        <Link href="/">
          <span className="text-xl font-bold text-[#0d9488] tracking-tight font-headline cursor-pointer">
            The Nurturing Atelier
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[#2a3433]/60 font-['Plus_Jakarta_Sans'] font-semibold hover:bg-[#e7f0ed] transition-colors px-3 py-2 rounded-lg">
            Home
          </Link>
          <a className="text-[#0d9488] font-bold border-b-2 border-[#0d9488] font-['Plus_Jakarta_Sans'] px-3 py-2">
            Post Competition
          </a>
          <a className="text-[#2a3433]/60 font-['Plus_Jakarta_Sans'] font-semibold hover:bg-[#e7f0ed] transition-colors px-3 py-2 rounded-lg">
            Find Teammates
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-[#e7f0ed] active:scale-95 duration-200 text-[#0d9488]">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        {!loading && (
          <div className="relative">
            {user ? (
              <div>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-10 h-10 rounded-xl overflow-hidden border-2 border-surface shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    alt="User profile avatar"
                    className="w-full h-full object-cover"
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                  />
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-semibold text-[#2a3433]">{user.displayName || 'User'}</p>
                      <p className="text-sm text-[#2a3433]/60">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-[#e7f0ed] text-[#2a3433] font-semibold transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-[#0d9488] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#0d9488]/90 transition-colors">
                  Login
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
