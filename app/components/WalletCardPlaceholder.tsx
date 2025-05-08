
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';
import { Button } from './ui/button';

interface WalletCardPlaceholderProps {
  onCreateWallet: () => void;
  isLoading?: boolean;
}

const WalletCardPlaceholder = ({ onCreateWallet, isLoading = false }: WalletCardPlaceholderProps) => {
  return (
    <Card className="w-full overflow-hidden animate-fade-in">
      <CardHeader className="pb-2 space-y-4">
        <h3 className="text-xl font-medium">Your Wallet</h3>
        <div className="w-full h-0.5 bg-muted"></div>
      </CardHeader>
      <CardContent className="py-6 space-y-6">
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="text-base-gray mb-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-70">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 19C6.63819 16.6928 8.27998 15 12 15C15.72 15 17.3618 16.6928 18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-1">No Wallet Yet</h4>
            <p className="text-muted-foreground mb-6">Create a smart account to get started</p>
            <Button
              onClick={onCreateWallet} 
              disabled={isLoading}
              size="lg"
              className="min-w-[180px] base-button"
            >
              {isLoading ? 'Creating...' : 'Create Wallet'}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <p className="text-xs text-muted-foreground text-center w-full">
          Your wallet will be created on Base blockchain
        </p>
      </CardFooter>
    </Card>
  );
};

export default WalletCardPlaceholder;
