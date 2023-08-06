"use client"
import Image from 'next/image'
import { InlineWidget } from 'react-calendly'
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'



export default function Home() {
  return (
    <main className="">

      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex ">

        {/* moving link container */}
        {/* pointer-events-none lets the user click through the element */}
        <div className="lg:pl-24 pointer-events-none lg:pt-12  lg:pb-0 fixed bottom-0 left-0 flex h-28 lg:gap-4 gap-8 w-full items-end justify-center bg-gradient-to-t from-background via-background to-transparent lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" pointer-events-auto "
            href="https://twitter.com/mwalts0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className="lg:w-8 lg:h-8 h-10 w-10 pb-2 hover:text-blue-600" />
          </a>
          <a
            className="pointer-events-auto "
            href="https://github.com/maxwalts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="lg:w-8 lg:h-8 h-10 w-10 pb-2 hover:text-gray-600" />
          </a>

        </div>

      </div>

      <InlineWidget
        url="https://calendly.com/max-walts/chat"
        styles={{
          height: '95vh',
          overflow: 'hidden',
        }}
      />
    </main>
  )
}
