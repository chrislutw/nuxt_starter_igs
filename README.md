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

### monent, mement-timezone

[documention](https://momentjs.com/)

```js
import Moment from 'moment-timezone'

const nowTaipei = Moment.tz('Asia/Taipei')

nowTaipei.weekday() // 星期一
const maintainTimeStart = nowTaipei.clone().hour(9) // 複製一份時間，改時間9點
const maintainTimeEnd = nowTaipei.clone().hour(12) // 複製一份時間，改時間12點

// 現在是不是在維護時間
nowTaipei.isBetween(maintainTimeStart, maintainTimeEnd)
```

### hi-base64, base64url

[base64url documention](https://github.com/brianloveswords/base64url#readme)
[hi-base64 documention](https://github.com/emn178/hi-base64)

> Base64 有三个字符`+`、`/`和`=`，在 URL 里面有特殊含义，所以要被替换掉：`=`被省略、`+`替换成`-`，`/`替换成`_`

```js
import Base64 from 'hi-base64'
import Base64url from 'base64url'

const encodedString = Base64.encode('123abc')
const decodedString = Base64.decode('hoih4ih2iuh')

const encodedUrlString = Base64url.encode('123abc')
const encodedUrlString = Base64url.decode('hoih4ih2iuh')

const encodedUrlString = Base64url.fromBase64(encodedString)
const encodedString = Base64url.toBase64(encodedUrlString)
```

### js-cookie

[documention](https://github.com/js-cookie/js-cookie#readme)

```js
import Cookies from 'js-cookie'

Cookies.set('name', 'value')
Cookies.set('name', 'value', { expires: 7, path: '' })

Cookies.get('name') // => 'value'
Cookies.get('nothing') // => undefined

Cookies.remove('name')
```

### jssha

[documention](https://github.com/Caligatio/jsSHA)

```js
const shaObj = new JSSHA('SHA-1', 'TEXT')
shaObj.setHMACKey('secretKey', 'TEXT')
shaObj.update('encoding content')
const shaString = shaObj.getHMAC('HEX')
```

### crypto-js AES

[documention](https://github.com/brix/crypto-js)

```js
import { AES, enc as cryptoEnc, mode as cryptoMode } from 'crypto-js'

const key = 'secret key 123'
const content = 'abc123'
const aesStr = AES.encrypt(content, key, { mode: cryptoMode.ECB }).toString()

const oriBytes = AES.decrypt(aesStr, key)
const oriText = oriBytes.toString(cryptoEnc.Utf8)
console.log(content === oriText)
```
