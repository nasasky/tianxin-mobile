import axios from 'axios'
import config from './config'
import qs from 'qs'

import { Toast } from 'vant'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    var instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      transformResponse: [function(data) {}]
    })

    instance.interceptors.request.use(
      config => {
        // 1、开启loading动画
        // 2、让每一个请求头都加上token字段
        // if(this.$store.state.token) {
        //   config.headers['X-Token'] = getToken()
        // } else {
        //   // 重定向到登录页
        // }

        if(config.method.toLocaleLowerCase() == 'put' || config.method.toLocaleLowerCase() == 'post' || config.method.toLocaleLowerCase() == 'delete') {
          config.data = qs.stringify(config.data)
        }
        return config
      },
      err => {
        // 关闭loading动画
        console.log('请求发生错误', err)

        // 请求超时，发起重新请求等处理
        if(err.code == 'ECONNABORTED' && err.message.indexof('timeout') != -1) {
          console.log('请求超时，可以根据需求重新发起请求')
        }

        // 请求发生错误，重定向到错误页面
        const errInfo = err.response
        if(errInfo) {
          const status = errInfo.status
          this.$router.push({
            path: `/error/${status}`
          })
        }
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      response => {
        let data
        if(response.data == undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }

        data = JSON.parse(data)
        if(data.code == -1) {
          let message = data.msg || 'err'
          Toast.fail({
            message,
            duration: 1000
          })
          return Promise.reject(message)
        }

        console.log('请求数据返回', data)
        return data
      },
      err => {
        // 关闭loading动画

        if(err && err.response) {
          switch(err.response.status) {
            case 400: 
              console.log('请求错误')
              err.msg = '请求错误'
            break;
            case 401: 
              console.log('未授权，请登录')
              err.msg = '未授权，请登录'
            break;
            case 403:
              console.log('拒绝访问')
              err.msg = '拒绝访问'
            break;
            case 404:
              console.log('请求地址错误')
              err.msg = '请求地址错误'
            break;
            case 408:
              console.log('请求超时')
              err.msg = '请求超时'
            break;
            case 500: 
              console.log('服务器内部错误')
              err.msg = '服务器内部错误'
            break;
            case 501:
              console.log('服务器未实现')
              err.msg = '服务器未实现'
            break;
            case 502:
              console.log('网关错误')
              err.msg = '网关错误'
            break;
            case 503: 
              console.log('服务不可用')
              err.msg = '服务器不可用'
            break;
            case 504:
              console.log('网关错误')
              err.msg = '网关错误'
            break;
            case 505:
              console.log('http版本不受支持')
              err.msg = "http版本不受支持"
            break;
          }
        }
        console.log('应答发生变化', err)
        return Promise.reject(err)
      }
    )

    instance(options).then(response => {
      resolve(response)
    }).catch(err => {
      reject(err)
    })
  })
}