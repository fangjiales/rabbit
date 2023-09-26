import httpInstance from "@/utils/https"

export function getCategoryApi() {
  return httpInstance({
    url: '/home/category/head'
  })
}