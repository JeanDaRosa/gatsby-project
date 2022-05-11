import React from 'react'

const recentPosts = [
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    imgAlt: 'post image',
    date: 'July 22, 2021',
    title: 'Round and round like a carousel',
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_15-600x600.jpg',
    imgAlt: 'post image',
    date: 'July 26, 2021',
    title: 'Wildlife photographer of the year',
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_12-160x160.jpg',
    imgAlt: 'post image',
    date: 'July 28, 2021',
    title: 'Go to Link',
  },
]

const Content = ({ imgAlt, img, date, title }) => (
  <div className="flex items-center pb-4">
    <div className="max-w-32">
      <div className="w-32 lg:w-20">
        <img className="" src={img} alt={imgAlt} />
      </div>
    </div>
    <div className="pl-2">
      <p className="text-sm pb-2">{date}</p>
      <h2 className="font-bold text-lg tracking-wide leading-5">{title}</h2>
    </div>
  </div>
)

const PostFooter = () => {
  return (
    <div className="pt-4 md:pr-4 lg:pl-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="border-solid border-2 border-blue-300 rounded bg-blue-300 w-24"></div>
      </div>
      <div className="flex flex-col">
        {recentPosts.map(item => (
          <div>
            <Content
              img={item.img}
              key={item.title}
              title={item.title}
              date={item.date}
              alt={item.imgAlt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostFooter
