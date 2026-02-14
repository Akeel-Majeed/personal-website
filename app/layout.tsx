import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akeel Ather Medina",
  description:
    "Neuroscience and mathematics student at UCL. Interested in AI, reinforcement learning, and building things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
