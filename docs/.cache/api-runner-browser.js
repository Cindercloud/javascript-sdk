var plugins = [{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-97187183-2"},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#c62828"},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/QuintenDes/cindercloud/cindercloud/js-sdk/docs/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks
// basically like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-browser.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-browser.js"),
//     options: { ... },
//   },
// ]

export function apiRunner(api, args, defaultReturn) {
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
  } else if (defaultReturn) {
    return [defaultReturn]
  } else {
    return []
  }
}

export function apiRunnerAsync(api, args, defaultReturn) {
  return plugins.reduce(
    (previous, next) =>
      next.plugin[api]
        ? previous.then(() => next.plugin[api](args, next.options))
        : previous,
    Promise.resolve()
  )
}
