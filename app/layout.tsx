import "./globals.css";
import { Inter, Josefin_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});
export const metadata = {
  title: "NoteUp",
  description: "A Note taking Web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${josefin_sans.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
