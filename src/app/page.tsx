/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import MetricsSection from "@/components/section/metrics-section";
import ArchitectureVisualizer from "@/components/section/architecture-visualizer";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import WordRotate from "@/components/magicui/word-rotate";
import { Marquee } from "@/components/magicui/marquee";
import { ArrowUpRight, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const MARQUEE_TECH_ROW_1 = [
  "Go (Golang)",
  "C++",
  "Python",
  "Apache Kafka",
  "AWS (DynamoDB, SQS, Step Functions)",
  "Redis",
  "gRPC & Protobuf",
  "Docker",
  "Kubernetes",
  "Distributed Systems",
];

const MARQUEE_TECH_ROW_2 = [
  "SIMD Hardware Acceleration",
  "LiteLLM Unified Gateway",
  "E2B Sandboxed Code Exec",
  "AES-256-GCM / HPKE Encryption",
  "Server-Driven UI (SDUI)",
  "WebAuthn PRF Passkeys",
  "Next.js",
  "React",
  "TypeScript",
  "Airflow ETL",
];

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 dark:bg-muted/30 px-3.5 py-1.5 text-xs shadow-xs hover:border-primary/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <AnimatedShinyText className="text-xs font-medium text-foreground">
                Software Engineer 2 @ Zomato • High-Scale Systems & AI Infra
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="gap-2.5 flex flex-col order-2 md:order-1 flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />

              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="text-lg sm:text-xl font-medium text-muted-foreground flex items-center gap-1.5 flex-wrap">
                  <span>Architecting</span>
                  <WordRotate
                    words={[
                      "Distributed Systems at 80M RPS",
                      "Real-Time 1M+ req/min Dispatch",
                      "E2E-Encrypted AI Platform Infra",
                      "Agentic Tooling & E2B Sandboxes",
                      "ICPC Regionalist Algorithmic Engines",
                    ]}
                    className="font-bold text-foreground underline decoration-primary/40 underline-offset-4"
                  />
                </div>
              </BlurFade>

              <BlurFadeText
                className="text-muted-foreground max-w-[600px] text-sm sm:text-base leading-relaxed pt-1"
                delay={BLUR_FADE_DELAY * 4}
                text={DATA.description}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 2} className="order-1 md:order-2 shrink-0">
              <Avatar className="size-24 md:size-32 border-2 border-border shadow-xl ring-4 ring-primary/10">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback className="font-bold text-xl">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Metrics Counter Bento Section */}
      <section id="metrics">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <MetricsSection />
        </BlurFade>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold tracking-tight">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-sm sm:text-base">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Interactive System Architecture Showcase */}
      <section id="architecture">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <ArchitectureVisualizer />
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* Skills & Infinite Marquee */}
      <section id="skills" className="overflow-hidden">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Technical Stack & Core Systems</h2>
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                <Sparkles className="size-3 text-primary" /> Production Tested
              </span>
            </div>
          </BlurFade>

          {/* Marquee Row 1 */}
          <div className="relative flex flex-col gap-2">
            <Marquee className="[--duration:28s]" pauseOnHover>
              {MARQUEE_TECH_ROW_1.map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold text-foreground flex items-center gap-1.5 shadow-2xs hover:border-primary/40 transition-colors"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {tech}
                </div>
              ))}
            </Marquee>

            {/* Marquee Row 2 (Reverse) */}
            <Marquee className="[--duration:32s]" reverse pauseOnHover>
              {MARQUEE_TECH_ROW_2.map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold text-foreground flex items-center gap-1.5 shadow-2xs hover:border-primary/40 transition-colors"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {tech}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Key Skill Badges with Icons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 11 + id * 0.03}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-3.5 flex items-center gap-2 hover:border-primary/40 transition-colors">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span className="text-foreground text-xs font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Competitions & Achievements */}
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 16 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center font-bold text-xs text-foreground">
                      MMM
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2 text-sm sm:text-base">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-xs sm:text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none font-mono">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
