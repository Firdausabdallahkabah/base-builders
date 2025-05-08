
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { formatEther } from 'viem';
import { Skeleton } from '@/app/components/ui/skeleton';
import { CopyIcon, ExternalLinkIcon } from 'lucide-react';
// import { toast } from 'sonner';

interface WalletCardProps {
  address: string;
  balance: bigint | null;
  chainId: number;
  isLoading?: boolean;
}

const WalletCard = ({ address, balance, chainId, isLoading = false }: WalletCardProps) => {
  const explorerBaseUrl = chainId === 84531 
    ? 'https://goerli.basescan.org/address/' 
    : 'https://basescan.org/address/';

  const shortenAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // toast.success('Address copied to clipboard');
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="pb-2 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">Your Wallet</h3>
          <Button variant="ghost" size="sm" onClick={copyAddress} className="gap-1">
            <CopyIcon size={14} />
            Copy
          </Button>
        </div>
        <div className="w-full h-0.5 bg-muted"></div>
      </CardHeader>
      <CardContent className="py-6 space-y-6">
        <div>
          <div className="text-sm text-muted-foreground mb-1">Address</div>
          <div className="flex items-center gap-2">
            <div className="font-mono text-base truncate">{shortenAddress(address)}</div>
            <a 
              href={`${explorerBaseUrl}${address}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700"
            >
              <ExternalLinkIcon size={14} />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-1">Balance</div>
          {isLoading || balance === null ? (
            <Skeleton className="h-7 w-28" />
          ) : (
            <div className="text-2xl font-semibold">
              {parseFloat(formatEther(balance)).toFixed(4)} ETH
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="flex-1 base-button" 
            onClick={() => window.location.href = '/fund'}
            size="lg"
          >
            Fund Wallet
          </Button>
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => window.location.href = '/dapps'}
            size="lg"
          >
            Try dApps
          </Button>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            Network: {chainId === 84531 ? 'Base Goerli' : 'Base Mainnet'}
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs">Connected</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WalletCard;
