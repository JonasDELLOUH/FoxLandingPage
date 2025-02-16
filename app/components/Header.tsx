import React from 'react';
import Image from "next/image";
import {logoApp} from "@/public/assets";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import EllipseBlueBlur from "@/app/components/theme/Header";

const Header = () => {
    return (
        <div className="border-b border-stroke-1">
            <Container className="relative bg-n-9">
                <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
                    <Image
                        src={logoApp}
                        alt={'logo'}
                        width={104}
                        height={32}
                    />
                    <Button
                        theme='primary'
                    >Login</Button>
                </div>

                <EllipseBlueBlur/>

            </Container>

        </div>
    );
};

export default Header;
