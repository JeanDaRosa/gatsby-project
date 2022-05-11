module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        meetUs:
          "url('http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/background_4.jpg')",
        headerBlog:
          "url('http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/hero_inner_blog.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
