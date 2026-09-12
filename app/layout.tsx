import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Kumar Yadav — Senior Data Scientist",
  description:
    "Portfolio of Aditya Kumar Yadav — Senior Data Scientist working across machine learning, analytics, forecasting and data engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
