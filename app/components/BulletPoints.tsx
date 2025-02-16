import React from 'react';
import Container from "@/app/components/Container";
import Headings from "@/app/components/theme/Headings";
import {bulletPoints} from "@/app/constants";
import Image from "next/image";

const BulletPoints = () => {
    return (
        <>
            <Headings title='Foxart' subtitle='How does it work?'/>
            <Container>
                <div className="w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
                    {bulletPoints.map((bulletPoint,) => (
                        <div
                            key={bulletPoint.id}
                            className={`
                            flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg-gap-28
                            ${Number(bulletPoint.id) % 2 !== 0 && 'lg:flex-row-reverse'}
                            `}
                        >
                            <div className="w-full flex justify-center lg:w-7/12">
                                <Image
                                    src={bulletPoint.image}
                                    alt={bulletPoint.alt}
                                    height={bulletPoint.height}
                                    width={bulletPoint.width}
                                    className="px-20 lg:px-0"
                                />
                            </div>
                            <div className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
                                <h3 className="h3">{bulletPoint.title}</h3>
                                <p className="body-1 text-n-5">{bulletPoint.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default BulletPoints;
