import React from 'react'

const galleryPhotos = [
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
  {
    src: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_16-160x160.jpg',
    alt: 'Gallery img',
  },
]

const Content = ({ src, alt }) => (
  <img
    className="pb-2 rounded sm:w-64 sm:pb-8 md:w-52 md:pb-4 lg:w-20 xl:w-20 xl:pb-2 2xl:w-24 2xl:pb-4"
    src={src}
    alt={alt}
  />
)

const Gallery = () => {
  return (
    <div className="pb-12 pt-4 lg:w-1/4 lg:px-8 xl:px-6 ">
      <div className="mb-4 ">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="border-solid border-2 border-blue-300 rounded bg-blue-300 w-24"></div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:flex-wrap">
        {galleryPhotos.map(item => (
          <Content src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
