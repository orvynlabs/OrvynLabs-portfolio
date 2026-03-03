"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
    CreditCard,
    TrendingUp,
    Wallet,
} from "lucide-react";

interface GlassWalletCardProps {
    balance?: string;
    currency?: string;
    address?: string;
    trend?: string;
    trendUp?: boolean;
    cardHolder?: string;
    expiry?: string;
    className?: string;
}

const defaultWallet = {
    balance: "12,345.67",
    currency: "ETH",
    address: "0x71C...9A23",
    trend: "+5.2%",
    trendUp: true,
    cardHolder: "Alex Morgan",
    expiry: "12/28",
};

export function GlassWalletCard({
    balance = defaultWallet.balance,
    currency = defaultWallet.currency,
    address = defaultWallet.address,
    trend = defaultWallet.trend,
    trendUp = defaultWallet.trendUp,
    cardHolder = defaultWallet.cardHolder,
    expiry = defaultWallet.expiry,
    className,
}: GlassWalletCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("w-full max-w-[400px]", className)}
        >
            <Card className="glass-wallet-card relative h-56 overflow-hidden rounded-2xl">
                {/* Abstract Background Glow */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl" />

                <div className="relative flex h-full flex-col justify-between p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="glass-wallet-icon flex h-10 w-10 items-center justify-center rounded-full">
                                <Wallet className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-[rgba(255,255,255,0.45)]">
                                    Total Balance
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <h3 className="text-2xl font-bold tracking-tight text-[#f0f0f0]">
                                        ${balance}
                                    </h3>
                                    <span className="text-xs font-medium text-[rgba(255,255,255,0.4)]">
                                        {currency}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Badge
                            variant="outline"
                            className={cn(
                                "glass-wallet-badge border-white/10 backdrop-blur-sm",
                                trendUp ? "text-white" : "text-white/40"
                            )}
                        >
                            <TrendingUp className="mr-1 h-3 w-3" />
                            {trend}
                        </Badge>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[rgba(255,255,255,0.45)]">
                                <CreditCard className="h-4 w-4" />
                                <span>•••• •••• •••• 4242</span>
                            </div>
                            <span className="font-mono text-xs text-[rgba(255,255,255,0.4)]">
                                {expiry}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-[#e5e5e5]">
                                {cardHolder}
                            </span>
                            <span className="glass-wallet-address rounded-full px-3 py-1 font-mono text-xs text-[rgba(255,255,255,0.6)]">
                                {address}
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
