import axios from '../api'

const login  = data => {
  console.log('发起登录请求', data)
  return axios({
    url: '/5a6614d399fd4',
    method: 'post',
    data
  })
}


export default {
  login
}
