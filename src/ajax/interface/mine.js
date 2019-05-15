import axios from '../api'

const searchSchoolByName = data => {
  return axios({
    url: '/school',
    method: 'post',
    data
  })
}

const updateUser = data => {
  return axios({
    url: '/update/user',
    method: 'post',
    data
  })
}

export default {
  searchSchoolByName,
  updateUser
}