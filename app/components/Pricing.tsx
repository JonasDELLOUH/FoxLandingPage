import React from 'react';
import Headings from "@/app/components/theme/Headings";
import Container from "@/app/components/Container";
import {pricing} from "@/app/constants";
import Image from "next/image";
import {icoCheck} from "@/public/assets";
import Button from "@/app/components/Button";

const Pricing = () => {
    return (
        <div id='pricing'>
            <Headings title='Foxart' subtitle='Pricing'/>
            <Container>
                <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
                    {pricing.map((pricing) => (
                        <div
                            key={pricing.id}
                            className={`${!pricing.featured && 'lg:mt-14'}`}>
                            <div
                                key={pricing.id}
                                className={`${pricing.featured ? 'bg-n-7' : 'bg-n-8'}
                    rounded-xl lg:rounded_2xl p-6 lg:p-12 text-center lg:text-start
                    `}
                            >
                                <div className="caption-1 text-n-5 uppercase">
                                    {pricing.plan}
                                </div>
                                <div className="space-y-3">
                                    <span className="h1 text-n-5">€</span>
                                    <span className="h1">{pricing.amount}</span>
                                </div>
                                <hr className={` border-t mt-7 mb-4 lg:mt-16 lg:mb-8
                                   ${pricing.featured ? 'border-n-6' : 'border-stroke-1'}`}/>
                                <div className="space-y-4 pb-8">
                                    {pricing.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className='flex items-center justify-center lg:justify-start gap-3'
                                        >
                                            <Image src={icoCheck} alt='Icone Check' width={24} height={24}/>
                                            <div className="body-2 text-n-3">
                                                {feature}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center lf:justify-start">
                                    <Button theme={pricing.featured ? 'primary' : 'secondary'}>
                                        {
                                            pricing.amount > 0 ? 'Buy this plan' : 'Get Started for free'
                                        }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Pricing;
