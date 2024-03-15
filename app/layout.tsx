import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import "@uploadthing/react/styles.css";
import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link';
import { Button } from '@mui/material';
import LinkComponent from '@/components/LinkComponent';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Categori',
  description: 'Note-taking app for visual learners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <body className={inter.className}>
          <>
            <CssBaseline />
            <Nav />
            {children}
          </>
        </body>
      </html>
  )
}
