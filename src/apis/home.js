import httpInstance from "@/utils/http"

export function getBannerApi() {
  return httpInstance({
    url: '/home/banner'
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