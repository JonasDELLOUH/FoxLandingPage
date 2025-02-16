import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Branding from "@/app/components/Branding";
import Features from "@/app/components/Features";
import CallToAction from "@/app/components/CallToAction";
import BulletPoints from "@/app/components/BulletPoints";
import Pricing from "@/app/components/Pricing";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Branding/>
            <Features/>
            <CallToAction/>
            <BulletPoints/>
            <Pricing/>
            <CallToAction minify={true} />
            <Footer/>
        </div>
    );
}
