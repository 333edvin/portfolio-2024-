
import "./globals.css";
import Layout from "./Layout/Layout";
import SmoothScroll from './components/homepage/animation/SmoothScroll';
import { Toaster } from 'sonner'



export const metadata = {
  title: "EJ - Developer",
  description: "edvin johnson portfolio",
};

export default function RootLayout({ children  }) {
  return (
    <html lang="en">
      <body >

        <Layout>
        <SmoothScroll/>
        {children}
        <Toaster />
        </Layout>
      </body>
    </html>
  );
}
