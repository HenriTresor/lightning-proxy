import { ArrowRight, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const listItems = [
    { name: "About Us", link: "" },
    { name: "Pricing", link: "" },
    { name: "FAQs", link: "" },
    { name: "Terms", link: "" }
]

function Header({ }: Props) {
    return (
        <div className='header w-full p-4 flex items-center justify-between  rounded-2xl sticky top-0 z-50 bg-white'>
            <Image
                src={"/logo.svg"}
                width={100}
                height={100}
                alt='logo'
            />

            <div className='hidden sm:block'>
                {
                    listItems.map((item, index) => {
                        return (
                            <Link className='text-[#1E1E1E] p-3' href={item.link} key={item.name}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>

            <div className='flex items-center justify-normal gap-4'>
                <button className='font-bold hidden sm:block'>Log In</button>
                <button className='bg-[#1675FF] text-white font-bold rounded-2xl p-4 flex items-center justify-normal gap-4'>Get Started <ArrowRight /> </button>
                <Menu className={'block sm:hidden'} />
            
            </div>

          
        </div>
    )
}

export default Header