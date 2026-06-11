import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata = {
  title: "Elite Speciality Clinic | Advanced Dental Care & Smile Solutions",
  description: "Comprehensive dental treatments with modern technology and patient-centered care in Dwarka, Delhi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
