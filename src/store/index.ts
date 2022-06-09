import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      userInfo: null,
      token: ''
    }
  }
})
