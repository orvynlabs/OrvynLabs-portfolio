'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, X } from 'lucide-react'

interface FaqItem {
    question: string
    answer: string
}

const faqs: FaqItem[] = [
    {
        question: 'Difference between a hour and a branding?',
        answer:
            'The Branding is ongoing and flexible — ideal for Startups design needs. Hour Rates are one-time, fixed-scope engagements for quicker goals like a rebrand or landing Page.',
    },
    {
        question: 'What types of design do you handle?',
        answer:
            'We handle brand identity, web design, UI/UX, packaging, social media assets, pitch decks, and more. If it involves design thinking, we can help.',
    },
    {
        question: 'How many requests can I make?',
        answer:
            'With our branding subscription, you can submit unlimited requests. We work through them one at a time, delivering fast, high-quality results.',
    },
    {
        question: 'Do you offer development too?',
        answer:
            'Yes! We offer full-stack development services including React, Next.js, and custom web applications to bring your designs to life.',
    },
    {
        question: 'Can I pause the Branding?',
        answer:
            'Absolutely. You can pause your subscription at any time and resume when you are ready. Your remaining days will be saved.',
    },
    {
        question: 'How fast is the turnaround?',
        answer:
            'Most requests are completed within 2-4 business days. More complex projects like full brand identities may take a bit longer.',
    },
    {
        question: 'What tools do you use?',
        answer:
            'We primarily use Figma for design, After Effects for motion, and modern frameworks like Next.js and Tailwind for development.',
    },
]

function FaqAccordionItem({
    item,
    isOpen,
    onToggle,
}: {
    item: FaqItem
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                <span
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '17px',
                        fontWeight: 500,
                        color: '#f0f0f0',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.4,
                    }}
                >
                    {item.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{
                        flexShrink: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 120, 100, 0.9)',
                        width: '24px',
                        height: '24px',
                    }}
                >
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '15px',
                                lineHeight: 1.7,
                                color: 'rgba(255,255,255,0.5)',
                                paddingBottom: '24px',
                                letterSpacing: '0.005em',
                            }}
                        >
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            style={{
                position: 'relative',
                padding: isMobile ? '60px 0 80px' : '100px 0 120px',
                background: '#0a0a0a',
            }}
        >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        marginBottom: '16px',
                    }}
                >
                    <span
                        style={{
                            display: 'block',
                            width: '64px',
                            height: '1px',
                            background: 'rgba(255,255,255,0.15)',
                        }}
                    />
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: '16px',
                            color: 'rgba(255,255,255,0.5)',
                            letterSpacing: '0.01em',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        FAQ
                    </p>
                    <span
                        style={{
                            display: 'block',
                            width: '64px',
                            height: '1px',
                            background: 'rgba(255,255,255,0.15)',
                        }}
                    />
                </div>
                <h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: isMobile ? '28px' : 'clamp(32px, 5vw, 48px)',
                        fontWeight: 700,
                        color: '#f0f0f0',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.1,
                        padding: isMobile ? '0 16px' : '0',
                    }}
                >
                    Your Questions, Answered
                </h2>
            </div>

            {/* Centered FAQ accordion */}
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: isMobile ? '0 20px' : '0 32px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {faqs.map((item, index) => (
                        <FaqAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }} />
                </motion.div>
            </div>
        </section>
    )
}
