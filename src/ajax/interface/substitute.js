import axios from '../api'

const getCourse = data => {
  return axios({
    url: '/5c659b043d88f',
    method: 'get',
    data
  })
}

const substitute = data => {
  return axios({
    url: '/substitute',
    method: 'post',
    data
  })
}

const collectCourse = data => {
  return axios({
    url: '/collect',
    method: 'post',
    data
  })
}

const getCourseByType = data => {
  return axios({
    url: '/course/type',
    method: 'post',
    data
  })
}

export default {
  getCourse,
  substitute,
  collectCourse,
  getCourseByType
}