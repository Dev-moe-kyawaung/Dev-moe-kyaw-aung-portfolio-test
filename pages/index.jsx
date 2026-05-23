// pages/index.jsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppCollectionSection from "../components/AppCollectionSection";
import DarkModeToggle from "../components/DarkModeToggle";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moe Kyaw Aung · Senior Android Developer</title>
        <meta name="description" content="Senior Android Developer portfolio by Moe Kyaw Aung (Dev-moe-kyawaung)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ParticlesBackground />
      <Navbar />
      <DarkModeToggle />
      <Hero />
      <AppCollectionSection />
    </>
  );
}
