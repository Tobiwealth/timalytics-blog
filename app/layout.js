import { Geist, Geist_Mono, Oswald, Quicksand } from "next/font/google";
import "./globals.css";
import Navabar from "./components/Navabar";
import Footer from "./components/Footer";
import {StoreProvider} from './store/StoreProvider'

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Timalytics Blog',
  description: 'Timalytics Consulting Ltd is a leading data consultancy firm offering innovative data-driven solutions and cutting-edge training programs. Committed to excellence and continuous learning, we are your trusted partner in navigating the dynamic landscape of data consultancy and advanced analytics.',
  keywords: ['Data', 'Data Analytics', 'Data Analysis', 'Data Science', 'Data Consultancy Services', 'Timalytics Consulting', 'Data-driven Solutions', 'Innovation in Data Consulting', 'Continuous Learning in Data', 'Trusted Data Partner', 'Advanced Data Solutions'],
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png?v=4',
    ],
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${quicksand.variable} antialiased bg-white`}
      >
        <StoreProvider>
          <Navabar/>
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
