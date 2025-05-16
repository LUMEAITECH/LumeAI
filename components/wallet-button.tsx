"use client";

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletButton: React.FC = () => {
    const { connected, publicKey } = useWallet();
    return (
        <>
            <div className="hidden p-0 lg:flex items-center justify-center w-fit bg-white text-black rounded-full inset-2 border-1 hover:scale-105 transition-all duration-300 border-black">

                <WalletMultiButton className="wallet-button" style={{ background: "none", color: "black", fontFamily: "Pixelify Sans", fontSize: "18px" }}>

                    {connected
                        ? publicKey?.toBase58().slice(0, 4) +
                        "..." +
                        publicKey?.toBase58().slice(-4)
                        : "Connect Wallet"}
                </WalletMultiButton>
            </div>
            <div className="flex p-0 lg:hidden items-center justify-center w-fit bg-white text-black rounded-full inset-2 border-1 hover:scale-105 transition-all duration-300 border-black">
                <WalletMultiButton className="wallet-button" style={{ background: "none", color: "black", fontFamily: "Pixelify Sans", fontSize: "8px" }}>
                    {connected
                        ? publicKey?.toBase58().slice(0, 4) +
                        "..." +
                        publicKey?.toBase58().slice(-4)
                        : "Connect Wallet"}
                </WalletMultiButton>
            </div>

        </>
    );
};

export default WalletButton;
