export default ({ markup, styles, helmet }) => {
  return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    <link rel="icon" href="/dist/favicon.ico">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${styles}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${markup}</div>
    <script src="/dist/client.js" async></script>
  </body>
</html>`
}
