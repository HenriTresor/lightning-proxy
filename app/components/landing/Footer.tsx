import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}


const footerElements = {
    Product: ['IPv6', 'Datacenter', 'Residential', 'ISP'],
    Account: ['Create Account', 'Log in'],
    Explore: ['FAQs', 'Terms of Service', 'Privacy Policy', 'Cookie Policy']
}

const socials = [
    { icon: <Twitter />, name: "Twitter" },
    { icon: <Instagram />, name: "Instagram" },
    { icon: <Facebook />, name: "Facebook" },
]

function Footer({ }: Props) {
    return (
        <div

            className="bg-[#F5F7FA] w-full p-10 mt-10"
        >
            <div className='flex items-center justify-around w-full flex-col md:flex-row'>
                <div className='w-full md:w-[30%] flex flex-col gap-4 p-5'>
                    <Image
                        src={'/logo.svg'}
                        width={200}
                        height={200}
                        alt={''}
                    />
                    <p>
                        LightningProxies offers a complex proxy infrastructure equipped with many proxy solutions in one place. We have Datacenter, Residential, IPv6 & ISP proxies at a cost-effective price.
                    </p>

                    <Image
                        src={'/about/discord.svg'}
                        width={250}
                        height={250}
                        alt={''}
                        className='cursor-pointer'
                    />
                </div>

                <div className='w-full md:w-[70%] grid grid-cols-2 md:flex justify-around text-[0.9rem] mt-5'>
                    <div>
                        <h1 className="uppercase text-[#1675FF] font-bold">Account</h1>
                        <ul className="flex flex-col gap-2 mt-4">
                            {footerElements.Account.map((element, index) => (
                                <li className='cursor-pointer'>
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="uppercase text-[#1675FF] font-bold">Product</h1>
                        <ul className="flex flex-col gap-2 mt-4">
                            {footerElements.Product.map((element, index) => (
                                <li className='cursor-pointer'>
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h1 className="uppercase text-[#1675FF] font-bold">Explore</h1>
                        <ul className="flex flex-col gap-2 mt-4">
                            {footerElements.Explore.map((element, index) => (
                                <li className='cursor-pointer'>
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <hr />

            <div className='w-full flex gap-5 items-center flex-col md:flex-row justify-between p-4'>
                <p className='text-[0.7rem]'>Copyright © 2023 LightningProxies All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    {
                        socials.map((social, index) => (
                            <span key={index}>
                                {social.icon}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer