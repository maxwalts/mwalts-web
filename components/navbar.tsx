import { usePathname } from 'next/navigation'
import Link from 'next/link'


export function Navbar() {
    const pathname = usePathname()
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
            <div className="lg:pl-24 pointer-events-none lg:pt-12 lg:pb-0 fixed top-0 left-0 flex h-14 lg:gap-4 gap-8 w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none drop-shadow">
                <Link className={`pointer-events-auto font-semibold hover:underline ${pathname === '/' ? 'underline' : ''}`} href="/">Home</Link>
                <Link className={`pointer-events-auto font-semibold hover:underline ${pathname === '/projects' ? 'underline' : ''}`} href="/projects">Projects</Link>
                <Link className={`pointer-events-auto font-semibold hover:underline ${pathname === '/contact' ? 'underline' : ''}`} href="/contact">Contact</Link>
            </div>
        </div>
    )
}