import { Krub } from 'next/font/google'
import "./globals.css";
import Layout from "./Layout/Layout";
import SmoothScroll from './components/homepage/animation/SmoothScroll';
import { Toaster } from 'sonner'

const inter = Krub({ subsets: ['latin'] , weight:['400'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Layout>
        <SmoothScroll/>
        {children}
        <Toaster />
        </Layout>
      </body>
    </html>
  );
}
