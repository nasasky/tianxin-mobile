import apiLogin from './interface/login'
import apiMine from './interface/mine'
import apiRegister from './interface/register'
import apiSubstitute from './interface/substitute'
import apiPublisher from './interface/publisher'

const { login } = apiLogin
const { searchSchoolByName, updateUser} = apiMine
const { publishCourse } = apiPublisher
const { register } = apiRegister
const { getCourse, substitute, collectCourse, getCourseByType } = apiSubstitute

const install = Vue => {
  if(install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign({}, {
          login,
          searchSchoolByName,
          updateUser,
          publishCourse,
          register,
          getCourse,
          substitute,
          collectCourse,
          getCourseByType
        })
      }
    }
  })
}

export default install
