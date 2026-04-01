import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type InnerPageProps = {
  children: ReactNode;
};

export function InnerPage({ children }: InnerPageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
