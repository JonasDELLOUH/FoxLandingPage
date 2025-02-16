import React from 'react';
import Container from "@/app/components/Container";
import Image from "next/image";
import {branding} from "@/app/constants";

const Branding = () => {
    return (
        <Container>
            <div className="flex flex-wrap item-center justify-center lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
                {
                    branding.map((brand, index) => (
                        <Image
                            key={brand.id}
                            src={brand.image}
                            alt={brand.alt}
                        />
                    ))
                }
            </div>
        </Container>
    );
};

export default Branding;
