export default function(context) {
  // console.log('middle env: ', context.env)
  try {
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  } catch (error) {
    context.userAgent = ''
  }
}
