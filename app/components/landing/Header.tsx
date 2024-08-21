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
        <div className='header w-full p-6 flex items-center justify-between  sticky top-0 z-50 bg-white pl-16 pr-16'>
            <Image
                src={"/logo.svg"}
                width={200}
                height={200}
                alt='logo'
                className='md:w-[200px]  w-[50px]'
            />

            <div className='hidden md:flex gap-5'>
                {
                    listItems.map((item, index) => {
                        return (
                            <Link className='text-[#1E1E1E] p-3 hover:bg-[#1673ff13] duration-500 rounded-full ' href={item.link} key={item.name}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>

            <div className='flex items-center justify-normal gap-4'>
                <button className='outlined'>Log In</button>
                <button className='filled'>Get Started <ArrowRight /> </button>
                <Menu className={'block md:hidden'} />

            </div>


        </div>
    )
}

export default Header