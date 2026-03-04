"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, type Variants } from "motion/react";
import { Mail, MessageSquare, Phone, Send, MapPin, Clock, Globe, ShieldCheck } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../ui/scroll-reveal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 py-24 sm:px-8 lg:px-16 xl:px-24 md:py-28">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.03] blur-[130px]" />
      </div>

      <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center gap-12 text-center">
        {/* --- ADDED: Header Section with Orvyn Branding --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[white] font-bold">
            Get In Touch
          </span>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            Let’s build something exceptional together
          </ScrollReveal>
          <p className="max-w-2xl text-foreground/70 mx-auto">
            Based in Calicut, scaling worldwide. Share your project details and our team
            of 4 full-stack specialists will reach out within one business day.
          </p>
        </motion.div>

        {/* --- ADDED: Info Grid (Quick Stats/Support) --- */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mb-4">
          {[
            { icon: Clock, label: "Avg. Response", value: "< 24 Hours" },
            { icon: Globe, label: "Availability", value: "Global / Remote" },
            { icon: ShieldCheck, label: "Privacy", value: "100% Encrypted" },
            { icon: MapPin, label: "Headquarters", value: "Calicut, India" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-xl border border-border/40 bg-background/40 backdrop-blur-sm">
              <stat.icon className="h-5 w-5 text-[white] mb-2" />
              <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</span>
              <span className="text-sm font-medium text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Existing Contact Card (Unchanged Logic) */}
        <Card className="group relative w-full max-w-5xl overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-0 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid gap-10 px-6 py-8 md:grid-cols-2 md:px-10 md:py-12"
            aria-label="Contact form"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-8 text-left text-foreground/70"
            >
              <motion.div
                variants={iconVariants}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-[white]" />
                Response within 24 hours
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Tell us about your project
                </h3>
                <p className="text-sm text-foreground/70">
                  We’ll schedule a discovery call to understand your goals,
                  timeline, and success metrics. Prefer email? Reach us at{" "}
                  <a
                    href="mailto:orvynlabs@gmail.com"
                    className="text-foreground underline decoration-border/70 underline-offset-4 transition-colors hover:text-primary"
                  >
                    orvynlabs@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div className="grid gap-4 text-sm text-foreground/70">
                <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 text-foreground/60"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p>orvynlabs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 text-foreground/60"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                    <p>+91 9496022026</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-border/40 bg-background/40 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-required="true"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
                      aria-hidden="true"
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border border-border/40 bg-background/40 pl-10 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                      autoComplete="email"
                      aria-required="true"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  Project Subject
                </Label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
                    aria-hidden="true"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="E.g. MVP Development / SaaS Architecture"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border border-border/40 bg-background/40 pl-10 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  How can we help?
                </Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your vision, stack requirements, and timeline."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[140px] rounded-xl border border-border/40 bg-background/40 pl-4 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-required="true"
                    required
                  />
                </div>
              </div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black transition-all hover:bg-[#e5e5e5] hover:shadow-lg"
                >
                  Send Message
                  <Send
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              <p className="text-xs text-foreground/60">
                By submitting this form you agree to our{" "}
                <a
                  href="#"
                  className="text-foreground underline decoration-border/70 underline-offset-4 transition-colors hover:text-[white]"
                >
                  privacy policy
                </a>
                .
              </p>
            </motion.div>
          </motion.form>
        </Card>

        {/* --- ADDED: Secondary Direct Contact Block --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-foreground/50"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>Available for new projects</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>Working hours: 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}