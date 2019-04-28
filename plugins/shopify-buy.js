import ShopifyBuy from 'shopify-buy'
import 'isomorphic-fetch'

// documentation = https://shopify.github.io/js-buy-sdk
const config = {
  domain: 'zero-waste-love.myshopify.com',
  storefrontAccessToken: '5cca2ba6e5be926a30489d7958c8240a'
}

const shopifyClient = ShopifyBuy.buildClient(config)

export { shopifyClient }
