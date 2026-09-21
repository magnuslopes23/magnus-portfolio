import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnus-lopes.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: `${siteConfig.name} — Software Engineer`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.intro,
  keywords: ["software engineer", "automation engineer", "data engineer", "Python developer", "API developer", "Ireland"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} — Software Engineer`,
    description: siteConfig.intro,
    siteName: siteConfig.name
  },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — Software Engineer`, description: siteConfig.intro },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { themeColor: "#07090d", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
