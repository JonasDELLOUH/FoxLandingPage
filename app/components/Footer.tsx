import React from 'react';
import Container from "@/app/components/Container";
import {social} from "@/app/constants";
import Image from "next/image";

const Footer = () => {
    return (
        <div
            className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
            <Container
                className='flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3'
            >
                <div className="flex items-center gap-4">
                    {social.map((link,) => (
                        <a
                        key={link.id}
                        href={link.link}
                        target='_blank'
                        rel='noreferrer'
                        title={link.alt}
                        >
                            <Image src={link.ico} alt={link.alt} width={20} height={20} />
                        </a>
                    ))}
                </div>
                <div className="space-x-4">
                    <a
                        href={'#/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Term & conditions
                    </a>
                    <a
                        href={'#/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Privacy Policy
                    </a>
                </div>
                <div className="">© 2024 All right reserved{""}
                    <a href='#/'
                       target='_blank'
                       rel='noreferrer'
                    >
                        Remote Monkey
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
