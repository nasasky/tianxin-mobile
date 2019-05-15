/**
 * 相对的文件目录
 * 是否包含子目录
 * 引入文件匹配的正则表达式
 */
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
