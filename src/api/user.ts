/**
 * 用户相关请求
*/
import request from '@/utils/request'
import type { userInfoIfc } from './types/common'

export const userLogin = (data: any) => {
  return request<{
    code: number
    msg: string
    data: userInfoIfc
  }>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const getUserInfo = () => {
  return request<{
    code: number
    msg: string
    data: object
  }>({
    method: 'GET',
    url: '/getUserInfo'
  })
}

export const logout = () => {
  return request<{
    code: number
    msg: string
    data: any
  }>({
    method: 'POST',
    url: '/logout'
  })
}
