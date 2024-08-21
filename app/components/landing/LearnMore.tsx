import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}



const listItems = [
    '4000 IPv6 Proxies', 'Individual /48 subnet and server', 'Whitelist up to 2 IPs', 'Unlimited Bandwidth', 'HTTP/s Protocal Support', 'Unlimited Concurrent Connections'
]

function LearnMore({ }: Props) {
    return (
        <div className='w-full mt-16 flex items-center flex-col sm:flex-row justify-center p-10 gap-5'>
            <Image
                src={'/learnmore.svg'}
                width={100}
                height={100}
                alt="learn more"
                className='w-full sm:w-[60%]'
            />

            <div className='w-full sm:w-1/2 flex flex-col gap-6 justify-normal items-start'>
                <Image
                    src={'/diamond.svg'}
                    width={200}
                    height={200}
                    className='w-full sm:w-[80%]'
                    alt=''
                />

                <p>
                    In hac habitasse platea dictumst. Sed erat nibh, vulputate ut lorem at, tincidunt varius magna. Aenean enim dui, lacinia id faucibus a, vestibulum eu mi
                </p>

                <h1>We got the best level of everything :</h1>
                <ul className='flex flex-col gap-4'>
                    {
                        listItems.map((item, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <Check stroke={'#1675FF'} /> {item}
                            </li>
                        ))
                    }
                </ul>
                <button className='filled'>Get Started <ArrowRight /> </button>
            </div>
        </div>
    )
}

export default LearnMore