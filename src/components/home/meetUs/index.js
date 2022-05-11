import React from 'react'
import { BanIcon, MapIcon, StarIcon } from '@heroicons/react/outline'

const items = [
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/team_06-160x160.jpg',
    subtitle: 'first',
    name: 'Antonia Craighton',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.',
    listItems: [
      {
        icon: BanIcon,
        href: '/',
      },
      {
        icon: MapIcon,
        href: '/',
      },
      {
        icon: StarIcon,
        href: '/',
      },
    ],
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/team_06-160x160.jpg',
    subtitle: 'first',
    name: 'Antonia Craighton',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.',
    listItems: [
      {
        icon: BanIcon,
        href: '/',
      },
      {
        icon: MapIcon,
        href: '/',
      },
      {
        icon: StarIcon,
        href: '/',
      },
    ],
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/team_06-160x160.jpg',
    subtitle: 'first',
    name: 'Antonia Craighton',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.',
    listItems: [
      {
        icon: BanIcon,
        href: '/',
      },
      {
        icon: MapIcon,
        href: '/',
      },
      {
        icon: StarIcon,
        href: '/',
      },
    ],
  },

  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/team_06-160x160.jpg',
    subtitle: 'first',
    name: 'Antonia Craighton',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.',
    listItems: [
      {
        icon: BanIcon,
        href: '/',
      },
      {
        icon: MapIcon,
        href: '/',
      },
      {
        icon: StarIcon,
        href: '/',
      },
    ],
  },
]

const Item = ({ name, desc, subtitle, listItems, img }) => (

  <div className="p-2 flex flex-col  md:w-1/2 lg:w-1/3 xl:w-1/4  mb-4">
    <div className=" py-8 bg-white rounded-xl shadow-2xl flex flex-col items-center">
      <div className="pb-8">
        <img src={img} alt="photo" className="rounded-full" />
      </div>
      <div className=" flex flex-col items-center px-4">
        <h3 className="tracking-widest uppercase">{subtitle}</h3>
        <h2 className="font-bold text-xl pb-2">{name}</h2>
        <p className="text-center leading-8">{desc}</p>
        <div className="flex justify-center pt-12 pb-2">
          {listItems.map(o => (
            <a href={o.href}>
              <o.icon className="h-4 w-4 mx-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const MeetUs = () => {
  return (
    <section className="bg-meetUs 2xl:bg-cover bg-top md:px-8 py-16 bg-no-repeat">
      <div className=" p-4 md:p-8 w container mx-auto">
        {/* introduction */}
        <div className=" flex flex-col items-center">
          <h3 className="pt-8 pb-2 tracking-widest uppercase text-xl">
            Meet Us
          </h3>
          <h2 className="pb-2 font-extrabold text-4xl md:text-5xl">The Crew</h2>
          <p className="text-center	pb-16 leading-8 md:text-xl">
            Override the digital divide with additional clickthroughs from
            DevOps.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row flex-wrap">

          {items.map(item => (
            <Item
              key={item.name}
              name={item.name}
              desc={item.desc}
              subtitle={item.subtitle}
              listItems={item.listItems}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetUs
