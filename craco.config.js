const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolve = pathName => path.resolve(__dirname, pathName)


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}