import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
// 函数调用 -> 压入函数栈（保存函数调用中所有变量）
// 函数结束 -> 释放所有变量


//如何将一个数组的数据放入另一个数组
// let totalNums = []
//
// const nums1 = [20,11,222]
// const nums2 = [111,11,222]
//
// for (let n of nums){
//   totalNums.push(n)
// }
// totalNums.push(...nums)
