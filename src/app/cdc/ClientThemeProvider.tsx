'use client';

import { ThemeProvider } from 'next-themes'

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" storageKey='cdc-homepage.colorScheme'>{children}</ThemeProvider>
}
