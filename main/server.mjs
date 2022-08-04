import {
  React, StaticRouter, ReactDOMServer
} from '@vendors/react'

import { App } from './App.mjs'

const jsx = (location) =>
  (<React.StrictMode>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </React.StrictMode>)


const stream = await ReactDOMServer.renderToReadableStream(jsx('/dash'), {})

console.log({ stream })

const decoder = new TextDecoder()

for await (const u8chunk of stream)
  console.log({ chunk: decoder.decode(u8chunk) })
