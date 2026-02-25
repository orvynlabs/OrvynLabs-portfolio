'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowRight } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/#our-work' },
    { name: 'Contact', href: '/#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const router = useRouter()
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuState])

    // Handle hash scrolling after cross-page navigation
    React.useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const hash = window.location.hash.substring(1)
            let attempts = 0
            const maxAttempts = 25
            const interval = setInterval(() => {
                const el = document.getElementById(hash)
                if (el) {
                    clearInterval(interval)
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }, 150)
                }
                attempts++
                if (attempts >= maxAttempts) clearInterval(interval)
            }, 100)
            return () => clearInterval(interval)
        }
    }, [pathname])

    const handleHashClick = (e: React.MouseEvent, href: string) => {
        if (!href.includes('#')) return

        e.preventDefault()
        setMenuState(false)

        const hash = href.split('#')[1]

        if (pathname === '/') {
            const el = document.getElementById(hash)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        } else {
            router.push(`/#${hash}`)
        }
    }

    const isActive = (href: string) => {
        if (href.startsWith('/#')) return false
        return pathname === href
    }

    return (
        <header>
            <nav className="fixed z-20 w-full px-3 sm:px-4">
                <div
                    className={cn(
                        'mx-auto mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6',
                        isScrolled
                            ? 'max-w-4xl border border-white/[0.08] bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
                            : 'max-w-[90rem] bg-transparent lg:px-16 xl:px-24'
                    )}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="home"
                        className="relative z-10 flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
                    >
                        <Logo />
                    </Link>

                    {/* Desktop Navigation — centered pill */}
                    <div className="absolute inset-0 m-auto hidden w-fit items-center lg:flex">
                        <div
                            className={cn(
                                'flex items-center gap-1 rounded-full px-1.5 py-1 transition-all duration-500',
                                isScrolled
                                    ? 'bg-transparent'
                                    : 'border border-white/[0.06] bg-white/[0.04] backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.15)]'
                            )}
                        >
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => handleHashClick(e, item.href)}
                                    className={cn(
                                        'group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-200',
                                        isActive(item.href)
                                            ? 'text-white'
                                            : 'text-white/50 hover:text-white/90'
                                    )}
                                >
                                    {/* Active/Hover background */}
                                    <span
                                        className={cn(
                                            'absolute inset-0 rounded-full transition-all duration-300',
                                            isActive(item.href)
                                                ? 'bg-white/[0.1]'
                                                : 'bg-transparent group-hover:bg-white/[0.06]'
                                        )}
                                    />
                                    <span className="relative">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="relative z-10 hidden items-center gap-3 lg:flex">
                        <Link
                            href="/#contact"
                            onClick={(e) => handleHashClick(e, '/#contact')}
                            className={cn(
                                'group flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300',
                                'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                            )}
                        >
                            <span>Get Started</span>
                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                        className={cn(
                            'relative z-30 flex size-10 items-center justify-center rounded-full transition-all duration-200 lg:hidden',
                            menuState
                                ? 'bg-white/10 text-white'
                                : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                        )}
                    >
                        <Menu
                            className={cn(
                                'size-5 transition-all duration-300',
                                menuState && 'rotate-180 scale-0 opacity-0'
                            )}
                        />
                        <X
                            className={cn(
                                'absolute size-5 transition-all duration-300',
                                menuState
                                    ? 'rotate-0 scale-100 opacity-100'
                                    : '-rotate-180 scale-0 opacity-0'
                            )}
                        />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        'fixed inset-0 z-20 transition-all duration-500 lg:hidden',
                        menuState
                            ? 'pointer-events-auto opacity-100'
                            : 'pointer-events-none opacity-0'
                    )}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setMenuState(false)}
                    />

                    {/* Menu Panel */}
                    <div
                        className={cn(
                            'absolute inset-x-3 top-3 flex flex-col rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/95 p-6 shadow-[0_16px_64px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 sm:inset-x-4',
                            menuState
                                ? 'translate-y-0 opacity-100'
                                : '-translate-y-4 opacity-0'
                        )}
                    >
                        {/* Mobile Header */}
                        <div className="mb-8 flex items-center justify-between">
                            <Link href="/" onClick={() => setMenuState(false)}>
                                <Logo />
                            </Link>
                            <button
                                onClick={() => setMenuState(false)}
                                className="flex size-10 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <ul className="flex flex-col gap-1">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleHashClick(e, item.href)}
                                        className={cn(
                                            'group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-200',
                                            isActive(item.href)
                                                ? 'bg-white/[0.08] text-white'
                                                : 'text-white/60 hover:bg-white/[0.04] hover:text-white/90'
                                        )}
                                    >
                                        <span>{item.name}</span>
                                        <ArrowRight
                                            className={cn(
                                                'size-4 transition-all duration-200',
                                                isActive(item.href)
                                                    ? 'text-white/40'
                                                    : 'text-white/20 group-hover:translate-x-0.5 group-hover:text-white/40'
                                            )}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile CTA */}
                        <div className="mt-6 border-t border-white/[0.06] pt-6">
                            <Link
                                href="/#contact"
                                onClick={(e) => handleHashClick(e, '/#contact')}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
