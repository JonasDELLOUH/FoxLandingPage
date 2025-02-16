import React from 'react';
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import Image from "next/image";
import {icoArrowRight} from "@/public/assets";

interface CallToActionProps{
    minify?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({minify = false}) => {
  return (
    <Container>
      <div
          className="max-w-4xl mx-auto py-5 lg:py-10"
      >
          <div className={
              `flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8
              ${!minify ? '' : 'lg:flex-row lg:justify-between'}
              `}>
              <div className={minify ? 'space-y-1 text-center lg:text-start' : 'space-y-4 text-center'}>
                  <div className="caption-1 text-n-1/50">Ready to Start ?</div>
                  <h3 className='h3'>Start your free today!</h3>
              </div>
              <Button theme={"primary"} className='flex items-center justify-center gap-1'>
                  <span>Get started</span>
                  <Image
                      src={icoArrowRight}
                      alt='Arrow Right'
                      width={24}
                      height={24}
                  />
              </Button>
          </div>
      </div>
    </Container>
  );
};

export default CallToAction;
