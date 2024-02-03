import React from 'react'

const flattenRoutes = (initRoutes) =>
  initRoutes.reduce((routes, item) => {
    if (item.children) {
      return [...routes, ...flattenRoutes(item.children)]
    }

    routes.push({
      ...item,
      Component: React.lazy(item.component),
    })
    return routes
  }, [])

export default flattenRoutes
