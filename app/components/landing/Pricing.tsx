import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const plans = [
    {
        time: "1 Day",
        description: "Get full access to our IPv6 Proxies for 24 hours",
        price: "$6.99",

    },

    {
        time: "1 Week",
        description: "Get full access to our IPv6 Proxies for 7 days",
        price: "$34.99"
    },
    {
        time: "1 Month",
        description: "Get full access to our IPv6 Proxies for 30 days",
        price: "$99.99",
        pin: true
    }
]


const listItems = [
    '4000 IPv6 Proxies', 'Individual /48 subnet and server', 'Whitelist up to 2 IPs', 'Unlimited Bandwidth', 'HTTP/s Protocal Support', 'Unlimited Concurrent Connections'
]
function Pricing({ }: Props) {
    return (
        <div className='mt-16 flex flex-col items-center gap-6 p-4'>
            <Image
                src={'/pricing.svg'}
                width={100}
                height={100}
                alt='pricing'
                className='w-full md:w-[30%]'
            />
            <Image
                src={"/prices.svg"}
                width={100}
                height={100}
                alt={'price'}
                className='w-full md:w-[50%] cursor-pointer'
            />

            <div className='w-full p-5 flex gap-5 flex-col-reverse md:flex-row'>
                <div className='md:grid grid-cols-2 gap-5'>
                    {
                        plans.map((plan, index) => (
                            <div key={index} className={`${plan?.pin && ' bg-[#f9b3283b] border-2 border-[#F9B228]  hover:bg-[#f9b3283b] hover:border-[#F9B228]'} rounded-xl p-5 w-full  flex flex-col justify-center gap-5 cursor-pointer  hover:bg-[#1673ff1d]  border-2 border-white hover:border-[#1675FF]`}>
                                <div className='flex items-center gap-5 '>
                                    <div className='flex flex-col gap-5 text-[0.9rem] '>
                                        <h1 className={`font-bold ${plan.pin && 'text-[#F9B228]'}`}>{plan.time}</h1>
                                        <p className='text-[#5a5a5a]'>{plan.description}</p>
                                    </div>
                                    <p className='font-bold'>{plan.price}</p>
                                </div>

                                <button className={`${plan.pin && 'bg-[#f9b32800] border-2 border-[#F9B228]  text-[#5a5a5a] hover:text-white hover:bg-[#F9B228]'} rounded-xl bg-[#1673ff27]  text-[#1675FF] hover:text-white hover:bg-[#1675ff] duration-500`}>
                                    Buy Now
                                </button>
                            </div>

                        ))
                    }
                </div>

                <div className='w-full md:w-[30%] flex flex-col gap-5'>
                    <div className=' p-10 rounded-xl flex flex-col gap-2 text-[0.9rem] bg-[#1673ff1d] cursor-pointer border-2 border-white border-[#1675FF] text-[#545454]'>
                        <h1 className='font-bold text-black'>
                            IPv6
                        </h1>

                        <p className='text-[#545454]'>
                            Duis at est et tellus suscipit interdum non id mauris. Aenean tempor congue tortor, vitae luctus purus mollis at. Mauris non consectetur dolor.
                        </p>

                        <h1 className='font-bold'>ALL PLANS INCLUDE</h1>

                        <ul>
                            {
                                listItems.map((item, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <Check stroke={'#1675FF'} /> {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex items-center p-5 border-2 rounded-xl gap-5'>
                        <h1 className='font-bold'>For Any Customer Plans </h1>
                        <button className='bg-[#1673ff27]  text-[#1675FF] hover:text-white hover:bg-[#1675ff] duration-500 font-bold p-2 text-[0.9rem] flex items-center justify-normal gap-4 rounded-xl'>Contact Us <ArrowRight /> </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing