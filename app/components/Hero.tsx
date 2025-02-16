import React from 'react';
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import Image from "next/image";
import {uiInterface} from "@/public/assets";
import Grid from "@/app/components/theme/Hero";

const Hero = () => {
    return (
        <div className="relative">
            <Container
                className="relative z-10 pt-10 lg:py-16"
            >
                <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-16">
                    <h1 className=" hero self-center">
                        Build <span
                        className='bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2 space-y-7'>Modern</span> Sass
                        for Startups
                    </h1>
                    <p className="body-1 text-n-5">
                        A pseudo-Latin text used in web design, layout, and
                        printing in place of things to emphasise layouts for previewing...
                    </p>

                    <Button theme={'primary'} href='/#pricing'>
                        Pricing and Plans
                    </Button>
                </div>

                <Image
                    src={uiInterface}
                    alt="Ui Interface illustration"
                    className='mt-3'
                />
            </Container>
            <Grid/>
        </div>
    );
};

export default Hero;
