"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUp,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Works", href: "/works" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Development", href: "/services" },
      { name: "Creative & Design", href: "/services" },
      { name: "Growth & Ads", href: "/services" },
      { name: "Strategic Systems", href: "/services" },
    ],
  },
  {
    title: "Direct Contact",
    links: [
      { name: "WhatsApp", href: "https://wa.me/919496022026" },
      { name: "Email Us", href: "mailto:orvynlabs@gmail.com" },
      { name: "Get Support", href: "/contact" },
      { name: "Schedule Meeting", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/orvynlabs" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/orvynlabs" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/orvynlabs" },
  { icon: Github, label: "GitHub", href: "https://github.com/orvynlabs" },
];

export function FooterBlock() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          phone: "Newsletter",
          message: `New subscription request from: ${email}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail("");
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative w-full overflow-hidden border-t border-border bg-card/90 backdrop-blur-xl"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[hsl(var(--primary)_/_0.18)] blur-[200px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.4, 0.18], rotate: [0, 25, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-[90rem] px-4 py-16 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-flex items-center gap-3"
            >
              <Card className="rounded-2xl border border-border/60 bg-card/80 px-3 py-1 text-xs uppercase tracking-[0.32em] text-muted-foreground shadow-[0_10px_30px_-20px_rgba(15,23,42,0.8)]">
                ORVYN LABS
              </Card>
              <Badge
                variant="outline"
                className="text-xs text-muted-foreground"
              >
                STUDIO
              </Badge>
            </motion.div>
            <p className="mb-4 max-w-md text-sm text-balance text-muted-foreground">
              ORVYN LABS is a specialized digital product agency in Calicut, Kerala, focusing on architectural engineering and high-fidelity design. We help startups build structured, scalable foundations that last.
            </p>

            {/* Newsletter */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-foreground">
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-10 rounded-xl border-border/60 bg-background/60 backdrop-blur placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  size="sm"
                  className="h-10 rounded-xl border border-border/60 bg-primary/90 px-4 text-primary-foreground shadow-[0_12px_35px_-20px_rgba(15,23,42,0.7)] hover:bg-primary disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                  ) : (
                    <Mail className="h-4 w-4" aria-hidden />
                  )}
                </Button>
              </form>
              {status === 'success' && (
                <p className="mt-2 text-[10px] text-green-500 font-medium">Subscribed successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-2 text-[10px] text-red-500 font-medium">Failed to subscribe. Please try again.</p>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-muted-foreground mt-6 border-t border-border/10 pt-6">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-3"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                <a href="mailto:orvynlabs@gmail.com" className="hover:text-primary transition-colors">orvynlabs@gmail.com</a>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-3"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <a href="https://wa.me/919496022026" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 9496022026</a>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-3 pt-2"
              >
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground/60">
                  Built on Structure. Designed to Scale.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Spacer for alignment */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold text-foreground/90">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <motion.span
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { x: 5, color: "hsl(var(--primary))" }
                        }
                        className="inline-block"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-10 h-px bg-border/70"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-2"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.6 + index * 0.05,
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-border/60 bg-white/5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary flex items-center justify-center p-0"
                  aria-label={social.label}
                >
                  <motion.div
                    transition={{ duration: shouldReduceMotion ? 0.25 : 0.3 }}
                  >
                    <social.icon className="h-4 w-4" aria-hidden />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {new Date().getFullYear()} ORVYN LABS. All rights reserved.</span>
            <Badge variant="outline" className="text-[10px] py-0 h-4 uppercase tracking-tighter">
              BETA
            </Badge>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-border/60"
              onClick={scrollToTop}
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { repeat: Infinity, duration: 1.5 }
                }
              >
                <ArrowUp className="h-4 w-4" aria-hidden />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
