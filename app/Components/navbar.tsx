"use client";

import { SimpleNavbar, SecondaryNavbar } from "@/ui/core-header-navbar";
import { useState } from "react";

export default function Navbar() {
  const [type, setType] = useState("react");

  return (
    <div className="w-full">
      <SimpleNavbar title="Portfolio" userName="Ganesh" />

      <SecondaryNavbar
        currentType={type}
        onTypeChange={setType}
        links={[
          { name: "React", href: "react" },
          { name: "Next.js", href: "nextjs" },
          { name: "Full Stack", href: "fullstack" },
          { name: "UI/UX", href: "uiux" },
        ]}
      />
    </div>
  );
}
