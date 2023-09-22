import httpInstance from "@/utils/http"

export function getBannerApi(options = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = options
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export function findNewApi() {
  return httpInstance({
    url: '/home/new'
  })
}

export function getHotApi() {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getGoodsApi() {
  return httpInstance({
    url: '/home/goods'
  })
}