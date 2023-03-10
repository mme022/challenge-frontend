import { create } from "zustand";

// creating interface for zustand storage
interface IpState {
  ipfsUrl: string;
  setIpfsUrl: (newUrl: any) => void;
  contractCid: string;
  setContractCid: (newCid: any) => void;
  contractCidMint: string;
  setContractCidMint: (newCid: any) => void;
  encryptionKey: any;
  setEncryptionKey: (newKey: any) => void;
  topic: string;
  setTopic: (newTopic: any) => void;
  currentTokenId: string;
  setCurrentTokenId: (newTokenId: any) => void;
  getNextTokenId: () => number;
  provider: any;
  setProvider: (newProvider: any) => void;
  signer: any;
  setSigner: (newSigner: any) => void;
  orbitDb: any;
  setOrbitDb: (newOrbitDb: any) => void;
  symmetricKey: any;
  setSymmetricKey: (newSymmetricKey: any) => void;
}

// initializing zustand...
export const useIpState = create<IpState>()((set, get) => ({
  ipfsUrl: "",
  setIpfsUrl: (newUrl) => set((state) => ({ ipfsUrl: newUrl })),
  contractCid: "",
  setContractCid: (newCid) => set((state) => ({ contractCid: newCid })),
  contractCidMint: "",
  setContractCidMint: (newCid) => set((state) => ({ contractCidMint: newCid })),
  encryptionKey: "",
  setEncryptionKey: (newEncryptionKey) =>
    set((state) => ({ encryptionKey: newEncryptionKey })),
  topic: "",
  setTopic: (newTopic) => set((state) => ({ topic: newTopic })),
  currentTokenId: "",
  setCurrentTokenId: (newTokenId) =>
    set((state) => ({ currentTokenId: newTokenId })),
  getNextTokenId: () => {
    let nextToken: number = get().currentTokenId as unknown as number;
    nextToken++;
    return nextToken;
  },
  provider: {},
  setProvider: (newProvider) => set((state) => ({ provider: newProvider })),
  signer: {},
  setSigner: (newSigner) => set((state) => ({ signer: newSigner })),
  orbitDb: {},
  setOrbitDb: (newOrbitDb) => set((state) => ({ orbitDb: newOrbitDb })),
  symmetricKey: "",
  setSymmetricKey: (newSymmetricKey) =>
    set((state) => ({ symmetricKey: newSymmetricKey })),
}));
