import "@/styles/globals.css";

import localFont from "@next/font/local";

const cafeDeParis = localFont({
  src: "../public/fonts/CafeDeParisSans-BWwJx.ttf",
  variable: "--font-cafeDeParis",
});
const galaktisRegular = localFont({
  src: "../public/fonts/Galaktis_Regular.ttf",
  variable: "--font-galaktisRegular",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
