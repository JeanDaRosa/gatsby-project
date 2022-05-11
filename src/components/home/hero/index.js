import { BanIcon } from '@heroicons/react/outline'
import React from 'react'
import hero2Half from '../../../assets/hero2Half.jpeg'
import Header from './header'

const items = [
  {
    title: 'VISION TO PLAN',
    desc: 'Completely synergize resource taxing relationships via premier niche markets. Dynamically procrastinate users.',
  },
  {
    title: 'PLAN TO MARKET',
    desc: 'Holisticly predominate extensible testing procedures for reliable supply chains. After installed base benefits.',
  },
  {
    title: 'MARKET TO GROWTH',
    desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.',
  },
]

const Item = ({ title, desc }) => (
  <div key={title} className="flex-1 p-8 pr-4">
    <div className="flex">
      <div className="w-8">
        <BanIcon className="h-8 w-8" />
      </div>
      <h2 className="pl-4 text-xl font-medium uppercase tracking-widest">
        {title}
      </h2>
    </div>
    <p className="text-gray-700 pt-2 md:pl-12 leading-8 ">{desc}</p>
  </div>
)

export default function Hero() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="container mx-auto pt-18">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current text-purple-500 h-20 w-20 transform rotate-180 ml-8"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 11.701c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701zm6 0c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701z" />
            </svg>
            <p className="font-extrabold text-4xl md:5xl leading-10 p-8 pb-0">
              New <strong className="text-purple-500">Bussines Advisory</strong>{' '}
              Services Provider
            </p>
            <p className="font-medium text-gray-700 leading-8 p-8 pt-4">
              Capitalise on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs.
            </p>
          </div>
          <div className="flex-1">
            <img className="object-fill px-8" src={hero2Half} alt="banner" />
          </div>
        </div>
        <div className="p-8 pt-0">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl">
            {items.map(item => (
              <Item key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
