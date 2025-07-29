'use client';

import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';
import AuthButton from '@/components/auth/AuthButton';
import Button from '@/components/ui/Button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export default function AuthModal({ 
  isOpen, 
  onClose, 
  initialMode = 'signin' 
}: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  const title = mode === 'signin' ? 'Sign In' : 'Create Account';
  const switchText = mode === 'signin' 
    ? "Don't have an account?" 
    : 'Already have an account?';
  const switchAction = mode === 'signin' 
    ? 'Sign up here' 
    : 'Sign in here';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="sm">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            {mode === 'signin' 
              ? 'Welcome back to the Marketplace' 
              : 'Join our Marketplace'}
          </p>
          
          <div className="flex justify-center">
            <AuthButton mode={mode} />
          </div>
        </div>

        <div className="text-center pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {switchText}{' '}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMode}
              className="p-0 h-auto font-medium text-primary hover:text-primary/80"
            >
              {switchAction}
            </Button>
          </p>
        </div>
      </div>
    </Modal>
  );
} 