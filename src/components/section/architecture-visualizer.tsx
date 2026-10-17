"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Cpu, Lock, Network, Server, ShieldCheck, Terminal, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureTab {
  id: string;
  name: string;
  icon: any;
  metric: string;
  description: string;
  steps: {
    title: string;
    detail: string;
    tech: string;
  }[];
  specDetails: { label: string; value: string }[];
}

const ARCHITECTURES: ArchitectureTab[] = [
  {
    id: "config",
    name: "80M RPS Config Service",
    icon: Server,
    metric: "42% Latency Cut • 80M RPS",
    description:
      "Fleet-wide configuration distribution across 50+ microservices, replacing an architectural SPOF with a gRPC & DynamoDB fallback mechanism and SIMD JSON acceleration.",
    steps: [
      {
        title: "gRPC Transport & SIMD Decoding",
        detail: "Vectorized SIMD instruction parsing cutting JSON serialization overhead by 42%.",
        tech: "Go + SIMD",
      },
      {
        title: "Multi-Tier In-Memory Cache",
        detail: "Zero-copy lock-free memory cache serving 99.8% of reads at sub-millisecond latency.",
        tech: "L1 Cache + Redis",
      },
      {
        title: "Autonomous Fallback & GSI",
        detail: "Automated failover to compressed DynamoDB payload with 70x size reduction.",
        tech: "DynamoDB GSI",
      },
    ],
    specDetails: [
      { label: "Peak Load", value: "80,000,000 RPS" },
      { label: "Fleet Services", value: "50+ Microservices" },
      { label: "Payload Compression", value: "70x Reduction" },
      { label: "Headroom under Surge", value: "2x Peak Capacity" },
    ],
  },
  {
    id: "dispatch",
    name: "1M+ req/min Stress Dispatch",
    icon: Zap,
    metric: "+90K Orders/Day • 2,000 Zones",
    description:
      "Kafka-driven real-time dispatch platform dynamically evaluating assignment stress and courier availability across 2,000 delivery zones.",
    steps: [
      {
        title: "Kafka Event Stream Ingestion",
        detail: "Sub-second event consumption processing order placements, partner pings, and delivery metrics.",
        tech: "Apache Kafka",
      },
      {
        title: "Stress-Rate Scoring Engine",
        detail: "Zone-level dynamic courier balancing replacing rigid static partner rankings.",
        tech: "Go Microservices",
      },
      {
        title: "Runtime Model Switching",
        detail: "Dynamic runtime parameter tuning per city/logistics partner with zero redeploys.",
        tech: "Dynamic Config Engine",
      },
    ],
    specDetails: [
      { label: "Throughput", value: "1,000,000+ req/min" },
      { label: "Geographic Zones", value: "~2,000 Zones" },
      { label: "Order Increments", value: "+90,000 orders/day" },
      { label: "Logistics Partners", value: "6 Integrated 3PLs" },
    ],
  },
  {
    id: "ai-infra",
    name: "E2E-Encrypted AI & Sandbox",
    icon: Lock,
    metric: "AES-256 / HPKE • E2B Sandbox",
    description:
      "Enterprise GenAI infrastructure featuring end-to-end client encryption, chat compaction, LiteLLM gateway, and sandboxed safe code execution.",
    steps: [
      {
        title: "Client-Side HPKE Encryption",
        detail: "AES-256-GCM / HPKE encryption with chat compaction cutting over-encryption by 36%.",
        tech: "Cryptography + WebAuthn",
      },
      {
        title: "LiteLLM Unified Gateway",
        detail: "Centralized multi-provider LLM routing, fallback policies, and token usage controls.",
        tech: "LiteLLM + Redis",
      },
      {
        title: "SQS Eval & E2B Code Sandboxing",
        detail: "Isolated micro-VM sandboxes on E2B for untrusted agent tool execution and asynchronous eval queue.",
        tech: "E2B Sandboxes + SQS",
      },
    ],
    specDetails: [
      { label: "Encryption", value: "AES-256-GCM / HPKE" },
      { label: "Compaction Savings", value: "36% Over-encryption Cut" },
      { label: "Execution Sandbox", value: "E2B Isolated Micro-VMs" },
      { label: "Evaluation Queue", value: "AWS SQS Async Engine" },
    ],
  },
];

export default function ArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState(ARCHITECTURES[0]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="size-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight">System Architecture & Production Highlights</h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Interactive engineering deep-dives into mission-critical systems designed and scaled in production.
        </p>
      </div>

      <div
        className="flex flex-wrap gap-2 p-1 bg-muted/60 dark:bg-muted/30 rounded-xl border border-border/80"
        suppressHydrationWarning
      >
        {ARCHITECTURES.map((arch) => {
          const Icon = arch.icon;
          const isActive = activeTab.id === arch.id;
          return (
            <button
              key={arch.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab(arch)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex-1 sm:flex-none justify-center",
                isActive
                  ? "bg-background text-foreground shadow-xs font-semibold ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              <Icon className={cn("size-3.5", isActive ? "text-primary" : "")} />
              <span className="truncate">{arch.name}</span>
            </button>
          );
        })}
      </div>

      <div className="relative rounded-2xl border border-border bg-gradient-to-b from-card via-card/90 to-card/50 p-5 md:p-6 shadow-xs overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <activeTab.icon className="size-4" />
            </span>
            <div>
              <h3 className="font-semibold text-base">{activeTab.name}</h3>
              <p className="text-xs text-muted-foreground">{activeTab.description}</p>
            </div>
          </div>
          <div className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold whitespace-nowrap">
            {activeTab.metric}
          </div>
        </div>

        {/* Pipeline Step Flow */}
        <div className="space-y-3 mb-6">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Network className="size-3.5" /> Pipeline Architecture Flow
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {activeTab.steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex flex-col justify-between p-3.5 rounded-xl border border-border/70 bg-background/50 hover:bg-background/90 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-primary font-medium">
                      {step.tech}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-foreground mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Grid */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2.5">
            <CheckCircle2 className="size-3.5 text-primary" /> Key Benchmarks & Deliverables
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {activeTab.specDetails.map((spec) => (
              <div
                key={spec.label}
                className="p-2.5 rounded-xl border border-border/50 bg-muted/30 flex flex-col justify-center"
              >
                <span className="text-[10px] text-muted-foreground">{spec.label}</span>
                <span className="text-xs font-bold text-foreground mt-0.5 font-mono">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
