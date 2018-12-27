# test1

> Nuxt + Express starter

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for pre-production and launch server
$ npm run buildpre
$ npm startpre

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Usage

各套件使用方式

### Axios

[documention](https://axios.nuxtjs.org/usage)

### GSAP

[documention](https://greensock.com/docs/NPMUsage)

in components

```js
import { TweenLite, Linear } from 'gsap/all'
import 'gsap/RoundPropsPlugin' // 去小數點

var obj = {
  value: 0
}
// TweenLite( target:Object, duration:Number, vars:Object )
TweenLite.to(obj, 5, {
  value: 600,
  roundProps: {
    value: 10
  },
  onUpdate: function() {
    header.innerHTML = obj.value
  }
})
```

### fontaswsome

1. 上官網找圖
2. 到正確的地方加上
3. 在 vue 檔內插入

```js
// nuxt.config.js
{
  set: '@fortawesome/free-solid-svg-icons',
  icons: ['faAngleDown']
},
// fab 開頭的圖示加這
// {
//   set: '@fortawesome/free-brands-svg-icons',
//   icons: ['fab']
// },
// far 開頭的圖示加這
{
  set: '@fortawesome/free-regular-svg-icons',
  icons: ['faCalendarAlt']
}
```

```js
// *.vue
<fa icon="angle-down" />
<fa :icon="[far, calendar-alt]" />
```
