import React from 'react'

const items = [
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_1-640x480.jpg',
    subtitle: 'first',
    title: 'Vision to Plan',
    desc: 'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    hrefText: 'learn more',
    href: '#',
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_1-640x480.jpg',
    subtitle: 'first',
    title: 'Vision to Plan',
    desc: 'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    hrefText: 'learn more',
    href: '#',
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_1-640x480.jpg',
    subtitle: 'first',
    title: 'Vision to Plan',
    desc: 'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    hrefText: 'learn more',
    href: '#',
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_1-640x480.jpg',
    subtitle: 'first',
    title: 'Vision to Plan',
    desc: 'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    hrefText: 'learn more',
    href: '#',
  },
]

const Item = ({ subtitle, href, hrefText, desc, img, title }) => (
  <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4">
    <img src={img} className="rounded-2xl mt-16 md:w-80 md:h-64 " />
    <h3 className="uppercase tracking-widest pt-8 font-medium">{subtitle}</h3>
    <h2 className="pb-2 text-xl font-bold">{title}</h2>
    <p className="pb-8 leading-8 pr-4">{desc}</p>
    <a href={href} className="font-bold tracking-widest">
      {hrefText}
    </a>
  </div>
)

const Services = () => {
  return (
    <section className="container mx-auto">
      <div className="p-8">
        <div className="flex flex-col items-center">
          <h3 className="tracking-widest uppercase text-xl py-2 pt-8">
            We offer
          </h3>
          <h2 className="pb-2 font-extrabold text-4xl md:text-5xl">
            Services in a Box
          </h2>
          <p className="text-center leading-8 md:text-xl">
            Seamlessly visualize quality collaboration and idea-sharing.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row flex-wrap">
          {items.map(item => (
            <Item
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              hrefText={item.hrefText}
              desc={item.desc}
              img={item.img}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
