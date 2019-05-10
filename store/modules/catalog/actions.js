import { shopifyClient } from '~/plugins/shopify-buy'
import { parse } from 'node-html-parser'

const formatDescription = (html) => {
  let data = {}
  const trimString = string => string.replace(/(\r\n|\n|\r)/gm, '')
  const virtualDom = parse(trimString(html))
  virtualDom.querySelectorAll('tr').forEach(row => {
    const key = row.firstChild.text
    const value = row.lastChild.text
    data[key] = value
  })
  return data
}

export default {
  async fetchCollection ({ commit }, handle) {
    try {
      const query = {
        query: `product_type:${handle}`
        // query: `product_type:${handle} AND tag:[test, temp]`
      }
      const productQuery = await shopifyClient.product.fetchQuery(query)

      //
      const products = productQuery.map(product => {
        const description = formatDescription(product.descriptionHtml)
        return { ...product, description }
      })

      commit('SET_COLLECTION', { handle, products })
      return
    }
    catch (e) {
      console.error(e)
    }
  },

  async fetchBookmarks ({ commit }, productIds) {
    try {
      const products = await shopifyClient.product.fetchMultiple(productIds)
      products.forEach(product => {
        const description = formatDescription(product.descriptionHtml)
        commit('SET_BOOKMARK', { id: product.id, product: { ...product, description } })
      })

      return
    }
    catch (e) {
      console.error(e)
    }
  }
}
