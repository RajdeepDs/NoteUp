import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "../public/fonts/Inter-Regular.ttf",
  variable: "--font-inter",
  display: "swap",
});
const josefin_sans = localFont({
  src: "../public/fonts/JosefinSans-Regular.ttf",
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
    <html lang="en" className={`${inter.variable} ${josefin_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
