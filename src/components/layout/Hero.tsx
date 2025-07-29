'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import AuthModal from '@/components/auth/AuthModal';
import { ShoppingBagIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="marketplace-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground font-heading">
                  Welcome to{' '}
                  <span className="text-primary">Lodge Marketplace</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Your local marketplace in Eppendorf. Discover unique products, 
                  connect with your community and shop with confidence.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShoppingBagIcon className="h-5 w-5 text-primary" />
                  <span>Shop local</span>
                </div>
                <div className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-primary" />
                  <span>Unique products</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-5 w-5 text-primary" />
                  <span>Trusted community</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {user ? (
                  <div className="text-center space-y-4">
                    <p className="text-lg text-foreground">
                      Hello, {user.displayName}! 👋
                    </p>
                    <Button size="lg" className="px-8">
                      Explore Products
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      size="lg" 
                      className="px-8"
                      onClick={() => setAuthModalOpen(true)}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8"
                    >
                      Browse Products
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10">
          <div className="w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-1/4 right-8 transform -translate-y-1/2 opacity-10">
          <div className="w-24 h-24 bg-secondary rounded-full blur-2xl"></div>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="signup"
      />
    </>
  );
} 