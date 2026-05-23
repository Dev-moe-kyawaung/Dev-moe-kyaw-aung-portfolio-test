// pages/index.jsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsCloud from "../components/SkillsCloud";
import AppCollectionSection from "../components/AppCollectionSection";
import EducationSection from "../components/EducationSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import DarkModeToggle from "../components/DarkModeToggle";
import ParticlesBackground from "../components/ParticlesBackground";
import ResumeDownloadButton from "../components/ResumeDownloadButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moe Kyaw Aung · Senior Android Developer</title>
        <meta
          name="description"
          content="Senior Android Developer portfolio by Moe Kyaw Aung (Dev-moe-kyawaung)"
        />
      </Head>

      <ParticlesBackground />
      <Navbar />
      <DarkModeToggle />
      <Hero />

      <AboutSection />
      <SkillsCloud />
      <EducationSection />
      <AppCollectionSection />
      <BlogSection />
      <ContactSection />

      {/* page အဆုံးမှာ CV ဒေါင်းခလုတ် */}
      <div className="px-8 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <ResumeDownloadButton />
        </div>
      </div>
    </>
  );
}
