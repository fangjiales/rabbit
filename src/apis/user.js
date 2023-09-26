import request from '@/utils/https'

export const loginApi = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}