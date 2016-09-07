'use babel';

export default function pathToRegex (path) {
  if (!path) return
  if (!/rosetta\//.test(path)) return
  return path.replace(/.*?rosetta\//, '')
    .replace(/src\//, '(src\\/)?')
    .replace(/\/index\.js$/, '(\\/index(\\.js)?)?')
    .replace(/\.[a-z]+?$/, function (dotExt) {
      if (dotExt === '.js') return '(\\.js)?'
      return '\\' + dotExt
    })
}
