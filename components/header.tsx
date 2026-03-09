'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowRight } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'

const StaggeredMenu = dynamic(() => import('@/components/StaggeredMenu').then(mod => mod.default || mod.StaggeredMenu), { ssr: false })

const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
                            href="/contact"
                            onClick={(e) => handleHashClick(e, '/contact')}
                            className={cn(
                                'group flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300',
                                'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                            )}
                        >
                            <span>Get Started</span>
                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu (StaggeredMenu) */}
                    <div className="block lg:hidden absolute inset-0 z-50 pointer-events-none">
                        <StaggeredMenu
                            position="right"
                            items={[
                                { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
                                { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
                                { label: 'Services', ariaLabel: 'View our services', link: '/services' },
                                { label: 'Our Work', ariaLabel: 'View our work', link: '/works' },
                                { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
                                { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
                            ] as any}
                            socialItems={[
                                { label: 'X (Twitter)', link: 'https://twitter.com/orvynlabs' },
                                { label: 'GitHub', link: 'https://github.com/orvynlabs' },
                                { label: 'LinkedIn', link: 'https://linkedin.com/company/orvynlabs' }
                            ] as any}
                            displaySocials
                            displayItemNumbering={true}
                            menuButtonColor="#ffffff"
                            openMenuButtonColor="#fff"
                            changeMenuColorOnOpen={true}
                            colors={['#1a1a1a', '#111111', '#0a0a0a', '#000000']}
                            logoUrl=""
                            accentColor="#ffffff"
                            isFixed={false}
                            onMenuOpen={() => { document.body.style.overflow = 'hidden' }}
                            onMenuClose={() => { document.body.style.overflow = '' }}
                            className="pointer-events-auto"
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}
