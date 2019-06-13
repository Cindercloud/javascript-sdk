var plugins = [{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-styled-components/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js'),
      options: {"plugins":[],"fonts":["crimson text:400, 400i, 700, 700i","space mono:400,700"]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-97187183-2"},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-twitter/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Cindercloud Documentation","short_name":"Cindercloud Documentation","description":"The Blockchain SDK","start_url":"/","background_color":"#e0e012","theme_color":"#c62828","display":"minimal-ui","icons":[{"src":"/logos/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/logos/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n                author\n                copyright\n              }\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    timeToRead\n                    fields { slug }\n                    frontmatter {\n                      title\n                      cover\n                      date\n                      category\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ","output":"/rss.xml"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
