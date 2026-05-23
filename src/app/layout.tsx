import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { appConfig } from "@/config/app";
import { fontVariables } from "@/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.url),
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`
  },
  description: appConfig.description,
  applicationName: appConfig.name,
  keywords: ["guitar lessons", "music education", "live classes", "guitar courses"],
  openGraph: {
    title: appConfig.name,
    description: appConfig.description,
    url: appConfig.url,
    siteName: appConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.name,
    description: appConfig.description
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={fontVariables}>
          <div className="min-h-screen">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
