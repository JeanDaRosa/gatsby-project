import { BanIcon, StarIcon } from '@heroicons/react/outline'
import React from 'react'

const items = [
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'FIST',
    title: 'Collaboration',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.',
    listItems: [
      {
        label: 'read more',
        href: '#',
        icon: BanIcon,
      },
      {
        label: 'get started',
        href: '#',
        icon: StarIcon,
      },
    ],
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'SECOND',
    title: 'Vision',
    desc: 'Completely iterate covalent strategic theme areas via accurate e-markets.',
    listItems: [
      {
        label: 'read more',
        href: '#',
        icon: BanIcon,
      },
      {
        label: 'get started',
        href: '#',
        icon: StarIcon,
      },
    ],
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'THIRD',
    title: 'Planning',
    desc: 'Seamlessly empower fully researched growth strategies and sources.',
    listItems: [
      {
        label: 'read more',
        href: '#',
        icon: BanIcon,
      },
      {
        label: 'get started',
        href: '#',
        icon: StarIcon,
      },
    ],
  },
]

const Item = ({ img, accountant, title, desc, listItems }) => (
  <div className="pb-8 flex flex-col md:flex-row md:w-1/3">
    <div className="pr-4 pb-4 w-80 md:w-44">
      <img src={img} className="rounded-2xl md:rounded-full" />
    </div>
    <div className="pt-0 md:pl-0 md:pr-8">
      <p className="tracking-widest">{accountant}</p>
      <p className="font-extrabold text-xl pb-2">{title}</p>
      <p className="leading-8">{desc}</p>
      <div className="flex md:flex-col pt-8">
        {listItems &&
          listItems.map(o => (
            <div className="flex items-center">
              <o.icon className="h-4 w-4" />
              <a href={o.href} className="pl-1 pr-2">
                {o.label}
              </a>
            </div>
          ))}
      </div>
    </div>
  </div>
)

const Blog = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row pt-24">
        <div>
          <p className="font-extrabold text-4xl p-8">Synergize resources</p>
          <p className="font-medium text-gray-700 leading-8 px-8  ">
            Collaboratively administrate empowered markets via plug-and-play
            maintain networks. Dynamically usable procrastinate B2B users after
            installed base benefits. Dramatically maintain visualize customer
            directed convergence without revolutionary ROI.
          </p>
        </div>
        <div className="p-8 pb-0 md:p-0 md:pr-8">
          <img
            className="w-full pt-4"
            src="http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/promo_contact.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-20 flex-wrap pl-8">
        {items.map(item => (
          <Item
            key={item.title}
            title={item.title}
            desc={item.desc}
            accountant={item.accountant}
            img={item.img}
            listItems={item.listItems}
          />
        ))}
      </div>
    </section>
  )
}

export default Blog
