import { Metadata } from "next";
import Navi from "../components/Navi";

export const metadata: Metadata = {
  title: { template: "%s | Next Movies", default: "Loading..." },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navi />
        {children}
      </body>
    </html>
  );
}
