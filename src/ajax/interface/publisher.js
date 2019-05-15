import axios from '../api'

const publishCourse = data => {
  return axios({
    url: '/publish',
    method: 'post',
    data
  })
}

export default {
  publishCourse
}