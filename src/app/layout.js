import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flex: "1", padding: "0rem", backgroundColor: "#121212" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
