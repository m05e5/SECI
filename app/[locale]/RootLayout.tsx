"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from '../components/splash';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function RootLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    // Simulate end of loading
    setTimeout(() => setIsLoading(false), 1000);
  }, [isLoading]);

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        {isLoading && isHome ? (
          <SplashScreen endLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <NavBar />
            <div className="grow font-[300]">{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}