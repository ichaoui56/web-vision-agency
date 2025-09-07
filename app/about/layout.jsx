import Footer from "@/components/Footer";

export const metadata = {
  title: "WebVisionAgency | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
