'use client'
import React from 'react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { ContactFormSection } from '@/components/uitripled/contact-form-section-shadcnui'
import Cursor from '@/components/ui/cursor'

export default function ContactPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-[#0a0a0a] min-h-screen">
                <div className="pt-24 lg:pt-32 pb-12">
                    <ContactFormSection />
                </div>
                <FooterBlock />
            </main>
        </>
    )
}
