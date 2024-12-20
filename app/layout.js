import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Literature Festival",
  description: "Literature Festival is about showing the culture, food, and our history, and many more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en suppressHydrationWarning">
      <body>
        {children}
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
