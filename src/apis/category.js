import request from '@/utils/http'

export function getTopCategroyApi(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}