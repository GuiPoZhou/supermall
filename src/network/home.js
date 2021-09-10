import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
// 函数调用 -> 压入函数栈（保存函数调用中所有变量）
// 函数结束 -> 释放所有变量
