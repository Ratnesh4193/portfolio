import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ratnesh Kumar Tiwari",
  initials: "RT",
  url: "https://github.com/Ratnesh4193",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  description:
    "Software Engineer 2 @ Zomato building distributed systems at 1M+ req/min and E2E-encrypted AI infra. ICPC Regionalist (AIR-56).",
  summary:
    "Software Engineer at **Zomato** building distributed systems at **1M+ req/min** (orders, dispatch), **50–80M rps** (config microservices), and **E2E-encrypted AI infra**. Delivered stress-based dispatch (+90K orders/day), zero-downtime pipelines over **8B+ DynamoDB records**, and **42% latency cuts** across 50+ services via SIMD decoding.\n\nBuilt agentic AI tooling, LLM eval on SQS, sandboxed code-exec on E2B, and the EV/Fleet platform for 30K+ riders. **ICPC Regionalist (AIR-56)**; strong in Go, C++, Python, AWS, DynamoDB, Redis, Kafka, and distributed system design.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Go", icon: Golang },
    { name: "C++", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "AWS", icon: Icons.aws },
    { name: "Kafka", icon: null },
    { name: "DynamoDB", icon: Postgresql },
    { name: "Redis", icon: null },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "gRPC", icon: null },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "LiteLLM / E2B", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rktssgk@gmail.com",
    tel: "+919455266878",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ratnesh4193",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ratnesh-kumar-tiwari/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/ratnesh_tiwari",
        icon: Icons.codeforces,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/ratnesh_tiwari/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rktssgk@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zomato",
      href: "https://www.zomato.com",
      badges: ["High Scale", "Distributed Systems", "AI Infra"],
      location: "Gurugram, India",
      title: "Software Engineer 2",
      logoUrl: "",
      start: "Jan 2026",
      end: "Present",
      description:
        "• Built a 3-stage Step Functions reconciliation that recovers 900+ stuck orders/day across 6 logistics partners using a sparse DynamoDB GSI at near-zero cost; designed 3PL retry/timeout contracts for order-state convergence.\n• Migrated a 2.64M req/min service from REST to gRPC, cutting both serialization overhead and p99 latency.\n• Designed E2E and in-transit encryption (AES-256-GCM/HPKE) for an AI platform with chat compaction, cutting over-encryption 36%; integrated LiteLLM as the unified gateway; built search over encrypted chat.\n• Built an agentic tool-calling system; shipped an LLM eval platform on SQS and sandboxed code execution on E2B.\n• Built a server-driven UI serving 4 platforms from a single backend with PRF-backed WebAuthn passkey authentication; redesigned socket streaming from O(n²) replay to delta, cutting client and server memory.",
    },
    {
      company: "Zomato",
      href: "https://www.zomato.com",
      badges: ["High Scale", "Kafka", "DynamoDB"],
      location: "Gurugram, India",
      title: "Software Engineer 1",
      logoUrl: "",
      start: "Oct 2024",
      end: "Dec 2025",
      description:
        "• Built real-time stress-based dispatch across ~2,000 zones on a 1M req/min order service using Kafka; replaced static 3PL ranking with live assignment rate and made dispatch models switchable per city/partner at runtime (+90K orders/day).\n• Built a zero-downtime deletion pipeline for 8B+ DynamoDB records using Airflow ETL, Kafka streams, and batched TTL updates; archived 110M records and cut table retention from 365 to 240 days.\n• Owned a config service at 50-80M rps across 50+ microservices; removed a fleet-wide SPOF with a gRPC/DynamoDB fallback (70x payload reduction), cut read latency 42% with SIMD decoding, and 2x peak headroom under load.\n• Ran the EV/Fleet platform for 30K+ riders: launched FOFO as a fleet-partner revenue channel with 10+ hubs, shipped async rider verification with a speed-signal classification engine, and onboarded 3 EV OEM partners.\n• Built onboarding and surrender systems for 10+ company-owned EV rental hubs managing 1,000+ vehicles.",
    },
    {
      company: "Invesco",
      href: "https://www.invesco.com",
      badges: ["Reporting", "Next.js", "Python"],
      location: "Hyderabad, India",
      title: "Engineer",
      logoUrl: "",
      start: "Jul 2023",
      end: "Sep 2024",
      description:
        "• Built a CSS grid-based reporting system (R, RShiny, Python) cutting report creation time by 95% with PDF export, template saving, and automated regeneration across multiple departments; re-implemented in Next.js with Redux Toolkit and on-demand data loading, reducing API calls 40% and page load speed 80%.\n• Migrated on-premises Shiny applications to cloud-based Posit Connect, improving scalability and reproducibility; automated data ingestion workflows using Python and Selenium with BeautifulSoup scrapers for data extraction.",
    },
    {
      company: "Valorant Consulting",
      href: "#",
      badges: ["React", "APIs"],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "Mar 2022",
      end: "Jun 2022",
      description:
        "• Built React-based internal tools to automate Excel-driven manufacturing workflows, reducing manual effort by 60%; implemented JWT/OAuth auth and integrated REST APIs (Node.js, Express) with MongoDB.",
    },
  ],

  education: [
    {
      school: "Madan Mohan Malviya University of Technology",
      href: "http://www.mmmut.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering (8.29/10.0 CGPA)",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Ultra-Scale Config Microservice",
      href: "https://github.com/Ratnesh4193",
      dates: "Oct 2024 - Dec 2025",
      active: true,
      description:
        "Engineered the central configuration backbone serving **50–80M RPS** across 50+ microservices. Eliminated a fleet-wide single-point-of-failure (SPOF) with a resilient gRPC/DynamoDB fallback achieving 70x payload reduction. Cut read latency **42% via SIMD decoding** and unlocked 2x headroom under peak traffic.",
      technologies: ["Go", "gRPC", "DynamoDB", "SIMD", "Redis", "AWS", "Grafana"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real-Time Stress Dispatch Engine",
      href: "https://github.com/Ratnesh4193",
      dates: "2024 - 2025",
      active: true,
      description:
        "Architected real-time stress-based courier dispatch spanning **~2,000 zones** on a **1M+ req/min** order platform using Kafka event streams. Replaced rigid static ranking with dynamic assignment rates and runtime-switchable partner models, delivering an additional **+90,000 orders/day**.",
      technologies: ["Go", "Kafka", "AWS", "DynamoDB", "Step Functions", "Microservices"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "E2E-Encrypted AI Platform & Agent Sandbox",
      href: "https://github.com/Ratnesh4193",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Designed end-to-end and in-transit cryptographic architecture (**AES-256-GCM / HPKE**) for enterprise AI chat. Implemented chat compaction cutting over-encryption by **36%** and built encrypted search. Integrated **LiteLLM** unified gateway, asynchronous LLM evaluations on SQS, and safe code execution in **E2B sandboxes**.",
      technologies: ["Python", "Go", "LiteLLM", "E2B", "SQS", "AES-256", "HPKE", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "8B+ Record Zero-Downtime Data Pipeline",
      href: "https://github.com/Ratnesh4193",
      dates: "2024 - 2025",
      active: true,
      description:
        "Engineered zero-downtime deletion and archival infrastructure for **8B+ DynamoDB records** using Airflow ETL orchestrations, Kafka changelog streams, and batched TTL updates. Successfully archived 110M historical records and reduced table retention from 365 to 240 days with zero operational impact.",
      technologies: ["DynamoDB", "Apache Airflow", "Kafka", "AWS", "Python", "ETL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cloud Online IDE & Execution Engine",
      href: "https://github.com/Ratnesh4193/online-ide",
      dates: "2024",
      active: true,
      description:
        "Full-stack browser-based IDE supporting multi-language code editing, real-time compilation, and sandboxed code execution. Implemented interactive WebSocket channels for standard I/O streaming with containerized worker pools.",
      technologies: ["React", "Node.js", "Docker", "WebSockets", "TypeScript", "Express"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193/online-ide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Competitive Programming Engine & Templates",
      href: "https://github.com/Ratnesh4193/CP-Templates",
      dates: "2021 - Present",
      active: true,
      description:
        "Curated, high-performance C++ algorithmic templates and data structures engineered for speed in competitive programming contests (ICPC, Hash Code, Codeforces). Includes segment trees, Treaps, suffix automata, and graph algorithms.",
      technologies: ["C++", "Algorithms", "Data Structures", "Benchmarking"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ratnesh4193/CP-Templates",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "ICPC 2022 Asia West Continent Final",
      dates: "December 2022",
      location: "Amritapuri, India",
      description:
        "Secured All India Rank 56 in ICPC 2022 Asia West Regionals (Amritapuri). Solved complex algorithmic and combinatorial problems under strict time and resource constraints.",
      image: "",
      links: [
        {
          title: "Rank: AIR-56",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://icpc.global",
        },
      ],
    },
    {
      title: "ICPC 2021 Asia West Continent Final",
      dates: "2021",
      location: "Amritapuri, India",
      description:
        "Secured All India Rank 96 in ICPC 2021 Asia West Regionals (Amritapuri), competing against the premier competitive programmers across India and South Asia.",
      image: "",
      links: [
        {
          title: "Rank: AIR-96",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://icpc.global",
        },
      ],
    },
    {
      title: "Google Hash Code 2022",
      dates: "February 2022",
      location: "Global / India",
      description:
        "Secured All India Rank 414 globally in Google Hash Code 2022, tackling engineering team optimization and large-scale project scheduling heuristics.",
      image: "",
      links: [
        {
          title: "Rank: AIR-414",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://codingcompetitions.withgoogle.com",
        },
      ],
    },
    {
      title: "Google Kick Start 2022",
      dates: "2022",
      location: "Global",
      description:
        "Ranked 469 / 15,000+ in Google Kick Start Round H and 538 / 13,000+ in Round F. Also qualified for Google Code Jam Round 1 in 2021.",
      image: "",
      links: [
        {
          title: "Top 3% Global",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://codingcompetitions.withgoogle.com",
        },
      ],
    },
    {
      title: "Meta Hacker Cup 2022",
      dates: "2022",
      location: "Global",
      description:
        "Advanced to Meta Hacker Cup Round 2 with global rank 2313. Ranked 128 / 14,000+ in Newton School Grand Contest (College Rank 1) and 207 / 80,000 in Code Kaze.",
      image: "",
      links: [
        {
          title: "Round 2 Qualifier",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.facebook.com/codingcontests",
        },
      ],
    },
    {
      title: "Competitive Programming Profiles",
      dates: "Active",
      location: "Global Platforms",
      description:
        "LeetCode Knight (Rating 1937, Top 1.5%), Codeforces Expert (Rating 1729, Top 5%), CodeChef 4-star (Rating 1995, Global Rank 6 in Mar '22 Lunchtime). Authored and tested 350+ DSA problems.",
      image: "",
      links: [
        {
          title: "Codeforces (1729)",
          icon: <Icons.codeforces className="h-4 w-4" />,
          href: "https://codeforces.com/profile/ratnesh_tiwari",
        },
        {
          title: "LeetCode (1937)",
          icon: <Icons.leetcode className="h-4 w-4" />,
          href: "https://leetcode.com/ratnesh_tiwari/",
        },
      ],
    },
  ],
} as const;
