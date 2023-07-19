"use client"
import Image from 'next/image'
import { InlineWidget } from 'react-calendly'
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'



export default function Home() {
  return (
    <main className=" p-24 lg:p-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 lg:gap-4 gap-8 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 pb-7 lg:pointer-events-auto lg:p-0"
            href="https://twitter.com/mwalts0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon href='' className="lg:w-6 lg:h-6 h-10 w-10 hover:text-blue-600" />
          </a>
          <a
            className="flex place-items-center gap-2 pb-7 lg:pointer-events-auto lg:p-0"
            href="https://github.com/maxwalts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="lg:w-6 lg:h-6 h-10 w-10 hover:text-gray-600" />
          </a>

        </div>
      </div>

      <InlineWidget
        url="https://calendly.com/max-walts/consulting-call"
      />
    </main>
  )
}
