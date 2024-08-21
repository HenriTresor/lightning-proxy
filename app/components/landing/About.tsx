import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}


const about = [
  {
    title: "Lightning Fast Speeds",
    description: "Lightning Fast SpeedsOur proxies are hosted on dedicated servers with 10GBps Network Speed, assuring a fast response time and no rate limits.",
    image: "/about/lightning.svg"
  },

  {
    title: "Global Proxies",
    description: "Our proxy network contains millions of unique IP addresses from 150+ countries and 1000+ cities.Web scraping has never been so easy since us.",
    image: "/about/global.svg"
  },

  {
    title: "Diversity",
    description: "Be it Datacenter, Residential, ISP or IPv6 Proxies, we have everything to scale your business up.",
    image: "/about/diversity.svg"
  },
  {
    title: "Enhanced Privacy",
    description: "We have a strict no log policy, your privacy is a Top-Priority for us.",
    image: "/about/privacy.svg"
  },
  {
    title: "Priority Support",
    description: "We are available 24/7/365 even on holidays to support you every step of the way, in case you need it.",
    image: "/about/24.svg"
  },
  {
    title: "User-Friendly Dashboard",
    description: "With our advanced featured dashboard, you can easily manage your plans and keep track of your proxy usage.",
    image: "/about/dashboard.svg"
  }

]
function About({ }: Props) {
  return (
    <div className='w-full flex items-center justify-center mt-16 flex-col p-4'>
      <Image
        src={"/about.svg"}
        alt={""}
        width={200}
        height={200}
        className='w-full sm:w-[50%]'
      />

      <div className='w-full sm:grid grid-cols-3 p-5 gap-5'>
        {
          about.map((item, index) => (
            <div key={index} className=' p-4 rounded-xl flex flex-col gap-2 text-[0.9rem] hover:bg-[#1673ff1d] cursor-pointer border-2 border-white hover:border-[#1675FF]'>
              <div className={`bg-[#1673ff3b] p-2 w-[30px] h-[30px] grid place-content-center rounded-md }`}>
                <Image
                  src={item.image}
                  width={20}
                  height={20}
                  className=''
                  alt={item.title}
                />
              </div>

              <h1 className='font-bold'>
                {item.title}
              </h1>

              <p className='text-[#545454]'>
                {item.description}
              </p>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default About