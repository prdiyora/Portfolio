import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Fraunces } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Priyank Diyora | SEO Executive - Surat",
  description:
    "Portfolio of Priyank Diyora, an SEO Executive from Surat, India. Technical SEO, GEO & AEO, content strategy, and SEO-led lead generation. Author of the Learning SEO course.",
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/android-chrome-512x512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <main className="min-h-screen relative mx-auto px-5 sm:px-10 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[82rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
    </html>
  );
}
