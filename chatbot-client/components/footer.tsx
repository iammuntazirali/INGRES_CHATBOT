'use client'

import Link from "next/link"
import React from "react"
import { SiDiscord, SiGithub , SiX } from 'react-icons/si'
import { Button } from "./ui/button"

const Footer: React.FC= ()=>{
    return(
        <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0 hidden lg:block">
            <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground/50">
                <Link href="https://github.com/vermaapurva33/INGRIS_CHATBOT" target="_blank">
                    <SiGithub size={18}/>
                </Link>

            </Button>
        </footer>
    )
}
export default Footer