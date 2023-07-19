"use client"
import Image from 'next/image'
import { InlineWidget } from 'react-calendly'
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'



export default function Home() {
  return (
    <main className="">

      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex ">
        <div className="lg:pl-24 lg:pt-12 pb-7 lg:pb-0 fixed bottom-0 left-0 flex h-48 lg:gap-4 gap-8 w-full items-end justify-center bg-gradient-to-t from-background via-background lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" lg:pointer-events-auto "
            href="https://twitter.com/mwalts0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className="lg:w-6 lg:h-6 h-10 w-10 hover:text-blue-600" />
          </a>
          <a
            className="lg:pointer-events-auto "
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
        styles={{
          height: '90vh',
        }}
      />
    </main>
  )
}
