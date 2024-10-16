"use client";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/ui/theme-toggle";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { LayoutGridIcon } from "lucide-react";
import React from "react";
import { Config } from "@/lib/data";
import { useTheme } from "next-themes";
import { Settings } from "@/components/ui/settings-dropdown";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

function AvatarSocials() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <section className="flex justify-between items-center border rounded-md space-x-3  p-2 sm:p-4 mb-4 ">
        <div className="inline-flex items-center">
          <span className="flex-grow flex flex-col gap-1">
            <span className="text-sm md:text-md font-semibold">
              {Config.Name}
            </span>
            <span className="text-muted-foreground text-xs ">
              {Config.Role}
            </span>
          </span>
        </div>
        <div className="sm:hidden">
          <Settings />
        </div>
        <div className="hidden sm:flex items-center justify-center gap-2">
          {Config.Links.map((link, index) => (
            <div key={`links${index}`}>
              <motion.div
                whileHover={{ scale: 1.19 }}
                transition={{ duration: 0.2 }}
              >
                <Link key={index} href={Object.values(link)[0]} target="_blank">
                  <TooltipProvider delayDuration={75}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className="shadow-md"
                          variant={"outline"}
                          size="icon"
                        >
                          {React.createElement(Object.values(link)[1], {
                            className:
                              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
                          })}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.tt}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </div>
          ))}
          <ToggleTheme />
        </div>
      </section>
    </div>
  );
}

export default AvatarSocials;
