import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "HeniTutorial Academy",
  description: "Learn modern development with style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-slate-100">
        <Navbar />
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
