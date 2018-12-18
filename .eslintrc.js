module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    eqeqeq: [2, 'allow-null'],
    //函数定义时括号前面要不要有空格
    'space-before-function-paren': [0, 'always'],
    'no-unused-vars': 0,
    'no-return-await': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow Import Export Everywhere
    allowImportExportEverywhere: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
