import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "@/component/HeroSection";
import NavBar from "@/component/NavBar";
import KeyFeatures from "@/component/KeyFeatues";
import PricingSection from "@/component/PricingSection";
export default function Home() {
  return (
    <div>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <KeyFeatures></KeyFeatures>
    <PricingSection></PricingSection>
    
    </div>
  );
}
