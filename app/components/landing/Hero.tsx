import { ArrowRight, CloudLightning } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Hero({ }: Props) {
    return (
        <div className='flex  p-10 pl-20 pr-20 md:p-6 items-center justify-center gap-10 flex-col md:flex-row'>
            <div className='w-full md:w-[40%] flex flex-col gap-6 mt-10 justify-between'>
                <Image
                    src={"/mostComplex.svg"}
                    width={200}
                    height={200}
                    alt='most complex proxt network'
                    className='w-full'
                />
                <p className='text-[18px] text-[#5a5a5a]'>Providing Top-Tier Proxies designed to ensure a high success rate on any task, be it easy or difficult.</p>

                <div className='flex items-center justify-normal gap-4'>
                    <button className='filled'>Get Started <ArrowRight /> </button>
                    <button className='outlined'>View Plans</button>
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
                className='w-[50%]'
            />
        </div>
    )
}

export default Hero