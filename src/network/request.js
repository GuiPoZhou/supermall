import axios from "axios";

export function request(config)  {

    // 1、创axios实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    //2.axios拦截器
    // 2.1请求拦截作用
    instance.interceptors.request.use(config => {

      return config
    },error => {
      console.log(err);
    })
    // 3.响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    },err => {
      console.log(err);
    })

    // 3发送真正的网络请求
  return   instance(config)
  }






