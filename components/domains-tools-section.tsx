'use client'
import React from 'react'
import ScrollReveal from './ui/scroll-reveal'
import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandTailwind,
    TbBrandTypescript,
    TbBrandNodejs,
    TbBrandFramerMotion,
    TbBrandPython,
    TbBrandAws,
    TbBrandPrisma,
    TbBrandVercel,
    TbBrandStripe,
    TbBrandFirebase
} from 'react-icons/tb'
import {
    MdOutlineAttachMoney,
    MdOutlineCloudQueue,
    MdOutlineShoppingCart,
    MdOutlinePsychology,
    MdOutlineFavoriteBorder,
    MdOutlineSecurity,
    MdOutlineAnalytics,
    MdOutlineDraw,
    MdOutlinePhoneIphone,
} from 'react-icons/md'

const frontendTools = [
    { name: 'Next.js', description: 'Server-side rendering and static generation.', username: '@nextjs', icon: <TbBrandNextjs size={20} /> },
    { name: 'React', description: 'Component-based interactive UIs.', username: '@reactjs', icon: <TbBrandReact size={20} /> },
    { name: 'Tailwind CSS', description: 'Utility-first rapid styling.', username: '@tailwindcss', icon: <TbBrandTailwind size={20} /> },
    { name: 'TypeScript', description: 'Strictly typed robust JavaScript.', username: '@typescript', icon: <TbBrandTypescript size={20} /> },
    { name: 'Framer Motion', description: 'Fluid, physics-based animations.', username: '@framermotion', icon: <TbBrandFramerMotion size={20} /> },
    { name: 'Vercel', description: 'High-performance edge deployment.', username: '@vercel', icon: <TbBrandVercel size={20} /> },
]

const backendTools = [
    { name: 'Node.js', description: 'Scalable real-time API backends.', username: '@nodejs', icon: <TbBrandNodejs size={20} /> },
    { name: 'Python', description: 'Advanced logic and data science.', username: '@python', icon: <TbBrandPython size={20} /> },
    { name: 'AWS', description: 'Reliable cloud infrastructure.', username: '@aws', icon: <TbBrandAws size={20} /> },
    { name: 'Prisma', description: 'Next-generation ORM for databases.', username: '@prisma', icon: <TbBrandPrisma size={20} /> },
    { name: 'Stripe', description: 'Secure global payment processing.', username: '@stripe', icon: <TbBrandStripe size={20} /> },
    { name: 'Firebase', description: 'Real-time databases and auth.', username: '@firebase', icon: <TbBrandFirebase size={20} /> },
]

const domains = [
    { name: 'FinTech', description: 'Secure, compliant financial platforms.', username: '@finance', icon: <MdOutlineAttachMoney size={20} /> },
    { name: 'SaaS', description: 'Scalable cloud software architectures.', username: '@software', icon: <MdOutlineCloudQueue size={20} /> },
    { name: 'E-Commerce', description: 'High-converting digital shopping.', username: '@retail', icon: <MdOutlineShoppingCart size={20} /> },
    { name: 'AI / ML', description: 'Intelligent digital product logic.', username: '@ai', icon: <MdOutlinePsychology size={20} /> },
    { name: 'HealthTech', description: 'HIPAA-compliant, medical software.', username: '@health', icon: <MdOutlineFavoriteBorder size={20} /> },
    { name: 'Web3', description: 'Robust decentralized applications.', username: '@crypto', icon: <MdOutlineSecurity size={20} /> },
    { name: 'Analytics', description: 'Data-driven insights and dashboards.', username: '@data', icon: <MdOutlineAnalytics size={20} /> },
    { name: 'Creative', description: 'Award-winning interactive design.', username: '@design', icon: <MdOutlineDraw size={20} /> },
    { name: 'Mobile', description: 'Native-feel cross-platform apps.', username: '@mobile', icon: <MdOutlinePhoneIphone size={20} /> },
]

const ReviewCard = ({
    name,
    username,
    description,
    icon
}: {
    name: string
    username: string
    description: string
    icon: React.ReactNode
}) => {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[350px] p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white bg-black shadow-lg overflow-hidden relative">
                    {icon}
                </div>
                <div>
                    <h4 className="text-sm font-medium text-white">{name}</h4>
                    <p className="text-xs text-gray-500">{username}</p>
                </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
                {description}
            </p>
        </div>
    )
}

export default function DomainsToolsSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">

            <div className="text-center max-w-3xl mx-auto px-6 mb-16 relative z-10 flex flex-col items-center justify-center">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="font-display text-4xl md:text-[56px] font-bold text-white mb-4 tracking-tight"
                >
                    Powered by our stack
                </ScrollReveal>
                <p className="text-gray-400 font-sans text-sm md:text-base tracking-wide">
                    The programming languages and tools we use to build reliable solutions.
                </p>
            </div>

            <div className="relative flex flex-col gap-6 group">
                {/* Layer fade masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

                {/* Row 1 - Marquee Left (Frontend) */}
                <div className="flex overflow-hidden">
                    <div className="flex animate-marquee-left gap-6 pr-6 w-max hover:[animation-play-state:paused]">
                        {[...frontendTools, ...frontendTools].map((item, idx) => (
                            <ReviewCard key={`frontend-${idx}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Marquee Right (Backend) */}
                <div className="flex overflow-hidden -ml-[100px]">
                    <div className="flex animate-marquee-right gap-6 pr-6 w-max hover:[animation-play-state:paused]">
                        {[...backendTools, ...backendTools].map((item, idx) => (
                            <ReviewCard key={`backend-${idx}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Row 3 - Marquee Left (Domains) */}
                <div className="flex overflow-hidden">
                    <div className="flex animate-marquee-left gap-6 pr-6 w-max hover:[animation-play-state:paused]" style={{ animationDuration: '45s' }}>
                        {[...domains, ...domains].map((item, idx) => (
                            <ReviewCard key={`domain-${idx}`} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(calc(-50% - 12px)); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }
      `}} />
        </section>
    )
}
