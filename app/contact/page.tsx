"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/kara-berke0",
    label: "Linkedin",
    handle: "kara-berke0",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:berkekara@utexas.edu",
    label: "Email",
    handle: "berkekara@utexas.edu",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/karaberke",
    label: "Github",
    handle: "karaberke",
  },
];

export default function contactInfo() {
  return (
    <div className="bg-light dark:bg-dark">
      <Navigation/>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 bg-light dark:bg-dark text-dark dark:text-light border-gray-300 dark:border-gray-700"
              >
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-dark dark:text-light group-hover:text-white group-hover:bg-gray-900 dark:group-hover:bg-gray-200 border-gray-300 dark:border-gray-700 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-gray-700 dark:text-gray-400">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
