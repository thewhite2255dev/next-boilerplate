import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <ScrollToTop />
    </div>
  );
}
