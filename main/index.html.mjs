
export const indexHtml = ({
  head = '',
  content = ''
}) =>
  (`
  <!DOCTYPE html>
<html lang="en">
<head>
    ${head}
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/index.css">
    <link rel="manifest" href="/app.webmanifest">

</head>
<body class="font-inter antialiased bg-slate-100 text-slate-600">
<noscript>You need to enable JavaScript to run this app.</noscript>
<script>
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register("/sw.mjs", {
      type: 'module'
    })
</script>
<div id="root">${content}</div>
<script type="module" src="/index.mjs"></script>
</body>
</html>
  
  `)
