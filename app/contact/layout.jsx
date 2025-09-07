import Footer from "@/components/Footer";

export const metadata = {
  title: "WebVisionAgency | Contact - Start Your Project",
  description: "Ready to start your project? Contact Web Vision Agency for web development, SEO, social media marketing, and AI solutions."
};

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}