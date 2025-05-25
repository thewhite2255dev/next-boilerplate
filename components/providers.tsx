"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ProgressProvider } from "@bprogress/next/app";

interface providersProps {
  children: React.ReactNode;
}

export function Providers({ children }: providersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ProgressProvider options={{ showSpinner: false }} shallowRouting>
        {children}
      </ProgressProvider>
    </NextThemesProvider>
  );
}
