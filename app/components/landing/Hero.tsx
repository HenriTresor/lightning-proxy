import { ArrowRight, CloudLightning } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Hero({ }: Props) {
    return (
        <div className='flex p-4 sm:p-6 items-center justify-center gap-10 flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 flex flex-col gap-6 mt-10 justify-between'>
              <Image
              src={"/mostComplex.svg"}
              width={200}
              height={200}
              alt='most complex proxt network'
              className='w-full'
              />
                <p>Providing Top-Tier Proxies designed to ensure a high success rate on any task, be it easy or difficult.</p>
           
                <div className='flex items-center justify-normal gap-4'>
                    <button className='bg-[#1675FF] text-white font-bold rounded-2xl p-4 flex items-center justify-normal gap-4'>Get Started <ArrowRight /> </button>
                    <button className='font-bold'>View Plans</button>
                </div>
                <Image
                src={"/rated.svg"}
                width={200}
                height={200}
                alt="rated"
                className="w-[50%] cursor-pointer"
                />
            </div>
            <Image
                src={"/hero.svg"}
                width={200}
                height={200}
                alt={"hero"}
                className='w-[70%]'
            />
        </div>
    )
}

export default Hero