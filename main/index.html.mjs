
export const indexHtml = ({
  content = ''
}) =>
  (`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modern PWA</title>
    <link rel="stylesheet" href="/index.css">

</head>
<body class="font-inter antialiased bg-slate-100 text-slate-600">
<noscript>You need to enable JavaScript to run this app.</noscript>
<script>
  if (localStorage.getItem('sidebar-expanded') == 'true') {
    document.querySelector('body').classList.add('sidebar-expanded');
  } else {
    document.querySelector('body').classList.remove('sidebar-expanded');
  }
</script>
<div id="root">${content}</div>
<script type="module" src="/index.mjs"></script>
</body>
</html>
  
  `)
