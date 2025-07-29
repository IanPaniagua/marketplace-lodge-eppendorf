'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import AuthModal from '@/components/auth/AuthModal';
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { user, signOut, loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="marketplace-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <ShoppingBagIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground font-heading">
                  Lodge Marketplace
                </h1>
                <p className="text-xs text-muted-foreground">
                  Eppendorf
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Categories
              </Link>
              <Link 
                href="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-20 bg-accent rounded animate-pulse"></div>
                  <div className="h-8 w-24 bg-accent rounded animate-pulse"></div>
                </div>
              ) : user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <UserCircleIcon className="h-8 w-8 text-muted-foreground" />
                    )}
                    <span className="hidden sm:block text-sm font-medium text-foreground">
                      {user.displayName || user.email}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openAuthModal('signin')}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => openAuthModal('signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
} 