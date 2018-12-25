export default function(context) {
  // console.log('middle env: ', context.env)
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
