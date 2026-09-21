"use client";

import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { ArrowRight, Menu, X } from "@/components/Icons";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell container">
        <a className="brand" href="#top" aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark" aria-hidden="true">ML</span>
          <span className="brand-copy"><span>{siteConfig.name}</span><small>{siteConfig.role}</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="nav-cta desktop-only" href={siteConfig.contactHref}>
          Start a project <ArrowRight aria-hidden="true" />
        </a>

        <button className="menu-button" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="button primary" href={siteConfig.contactHref} onClick={() => setOpen(false)}>Start a project <ArrowRight aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
