'use client'
import React from 'react'
import EldiaLogo from './logo'
import { toast } from '@/hooks/use-toast'
import WalletButton from './wallet-button'
import {
    IconBrandTwitch,
    IconBrandX,
} from "@tabler/icons-react"
import { BookOpenText } from "lucide-react"

const contractID = "Coming Very Soon"

function Header() {
    const handleCopy = () => {
        navigator.clipboard.writeText(contractID)
        toast({
            title: "Copied to clipboard",
            description: "You can now paste it in the dex",
            duration: 1000,
        })
    }

    return (
        <div className='fixed w-full z-50'>
            <div className='flex flex-row w-full justify-between items-center lg:px-8 px-2 py-4'>
                <EldiaLogo />
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <button onClick={handleCopy}>
                        <span className="text-lg">{contractID.slice(0, 4) + "..." + contractID.slice(-4)}</span>
                    </button>
                    <div className="flex gap-4 mt-2">
                        <a href="https://x.com/raedtoken" target="_blank" rel="noopener noreferrer" 
                           className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <IconBrandX className="w-6 h-6 text-black" />
                        </a>
                        <a href="/terminal"
                           className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <BookOpenText className="w-6 h-6 text-black" />
                        </a>
                        <a href="https://www.twitch.tv/raedtoken" target="_blank" rel="noopener noreferrer"
                           className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                            <IconBrandTwitch className="w-6 h-6 text-black" />
                        </a>
                    </div>
                </div>
                <WalletButton />
            </div>
        </div>
    )
}

export default Header