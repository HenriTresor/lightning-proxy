'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {}


const faqs = [
    {
        question: "What payments method do you accept?",
        answer: "We accept most CryptoCurrencies via Cryptomus (BTC, ETH, LTC, USDT, etc..) and Credit Card payments via Stripe.",


    },

    {
        question: "Do you provide trials before purchasing any plans?",
        answer: "Yes, we do. Please contact us via Live Chat and we will be happy to offer you a trial of our proxies."
    },
    {
        question: "Can I pay with Credit Card/Paypal?",
        answer: "Yes! We accept Credit Card and Paypal payments via Stripe."
    }
]

function Faq({ }: Props) {
    return (
        <div className='mt-16 flex justify-center w-full'>
            <div className='w-full sm:w-1/2 border-2 p-5 flex flex-col gap-4 rounded-lg'>
                <h1 className='text-[#1675FF] font-bold'>FAQs</h1>
                <h1 className='capitalize text-[1.5rem] font-bold'>All your Questions, Answered</h1>

                {
                    faqs.map((faq, index) => (
                        <Disclosure as="div" className="p-2 border-2 rounded-lg" key={index}>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="group flex w-full items-center justify-between">
                                        <span className="text-sm/6 font-medium ">
                                            {faq.question}
                                        </span>
                                        <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-sm/5">{faq.answer}</DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    ))
                }

                <div className={'w-full grid place-content-center'}>
                    <button className='p-2 flex items-center gap-4 border-2 rounded-full border-[#1675FF]'>
                        Read All FAQs <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faq