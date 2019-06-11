const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = {
  head: {
    title: 'nuxt-serverless',
    meta: [
      { chatset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  srcDir: './src',
  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
  ],
  build: {
    extend(config) {
      config.externals = []
    },
    standalone: true,
  },
  render: {
    etag: false,
    compressor: { threshold: Infinity },
  },
}