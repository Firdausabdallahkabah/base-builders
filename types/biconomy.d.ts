// Type definitions for Biconomy SDK
declare module '@biconomy/account' {
  export interface Signer {
    getAddress: () => Promise<`0x${string}`>;
    signMessage: (message: string) => Promise<`0x${string}`>;
  }

  export interface SmartAccountClientConfig {
    signer: Signer;
    chainId: number;
    bundlerUrl: string;
  }

  export interface SmartAccountClient {
    getAccountAddress: () => Promise<string>;
    // Add other methods as needed
  }

  export function createSmartAccountClient(config: SmartAccountClientConfig): Promise<SmartAccountClient>;
}
