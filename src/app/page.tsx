import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header/>
      <Section1/>
      <Footer/>
    </main>
  );
}
