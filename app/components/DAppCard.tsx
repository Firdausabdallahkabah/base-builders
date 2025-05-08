
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from './ui/button';

export interface DApp {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  contractAddress: string;
  abi: unknown[];
  functionName: string;
  functionArgs?: unknown[];
}

interface DAppCardProps {
  dapp: DApp;
  onInteract: (dapp: DApp) => void;
  isLoading?: boolean;
}

const DAppCard = ({ dapp, onInteract, isLoading = false }: DAppCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center overflow-hidden">
          <img src={dapp.iconUrl} alt={dapp.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <CardTitle className="text-lg">{dapp.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{dapp.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onInteract(dapp)} 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Try it out'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DAppCard;
