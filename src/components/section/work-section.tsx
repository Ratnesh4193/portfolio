/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    const initials = (alt || "CO")
      .split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div className="size-9 md:size-10 border rounded-full shadow-xs ring-2 ring-border bg-muted flex-none flex items-center justify-center font-bold text-xs text-foreground">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-9 md:size-10 p-1 border rounded-full shadow-xs ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  // Default expanded to primary Zomato roles
  const defaultValues = DATA.work.slice(0, 2).map((w) => w.company + w.title);

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultValues}
      className="w-full grid gap-3"
    >
      {DATA.work.map((work) => {
        const itemKey = work.company + work.title;
        return (
          <AccordionItem
            key={itemKey}
            value={itemKey}
            className="w-full border border-border/60 rounded-xl p-3.5 sm:p-4 bg-card/40 hover:bg-card/70 transition-colors grid gap-2"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-1 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2 flex-wrap">
                      <span className="text-sm sm:text-base">{work.company}</span>
                      {work.badges && work.badges.length > 0 && (
                        <div className="hidden sm:flex items-center gap-1">
                          {work.badges.map((badge) => (
                            <span
                              key={badge}
                              className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-none ml-2">
                  <span className="text-xs tabular-nums text-muted-foreground font-mono">
                    {work.start} - {work.end ?? "Present"}
                  </span>
                  {/* Always-visible chevron button */}
                  <div className="size-6 rounded-full bg-muted/80 border border-border/70 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:bg-muted transition-colors">
                    <ChevronDown className="size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 pt-2 ml-12 sm:ml-13 text-xs sm:text-sm text-muted-foreground">
              {work.description.includes("\n") ? (
                <ul className="list-disc pl-4 space-y-2 pt-1">
                  {work.description
                    .split("\n")
                    .map((line) => line.replace(/^[•\-\*]\s*/, "").trim())
                    .filter(Boolean)
                    .map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="leading-relaxed">{work.description}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
