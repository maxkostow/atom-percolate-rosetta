'use babel'

import pathToRegex from '../lib/path_to_regex'

describe('lib/path_to_regex', function () {
  it('should translate path to a regex', function () {
    var re = new RegExp(pathToRegex('/path/to/rosetta/src/folder/index.js'))
    expect(re.test('folder')).toBe(true)
    expect(re.test('folder/index')).toBe(true)
    expect(re.test('folder/index.js')).toBe(true)
    expect(re.test('src/folder')).toBe(true)
  })
})
