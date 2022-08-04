import {
  React, StaticRouter, ReactDOMServer
} from '@vendors/react'

import { PassThrough } from 'node:stream'


import { App } from 'main/App.mjs'

const jsx = (location) =>
  (<React.StrictMode>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </React.StrictMode>)


const stream = await ReactDOMServer.renderToReadableStream(jsx('/dash'), {})

console.log({ stream })


/*const pass = new PassThrough({ encoding: 'utf8'})

login.pipe(pass)*/

for await (const chunk of stream)
  console.log({ chunk })
