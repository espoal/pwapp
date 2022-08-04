import { React } from '@vendors/react'
import {
  StaticRouter, ReactDOMServer
} from '@vendors/react/server.mjs'
import { writeFile } from 'node:fs/promises'
import { indexHtml } from './index.html.mjs'

import { App } from './App.mjs'

const jsx = (location) =>
  (<React.StrictMode>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </React.StrictMode>)

const decoder = new TextDecoder()


const renderHelper = async ({ location }) => {
  const stream =
    await ReactDOMServer.renderToReadableStream(jsx(location), {})

  let content = ''

  for await (const u8chunk of stream)
    content += decoder.decode(u8chunk)

  // console.log({ cwd: process.cwd() })

  await writeFile(
    `dist/public/ssr${location}/index.html`,
    indexHtml({ content }))

}

const pages = [
  {
    location: '/dash'
  },
  {
    location: '/auth/login'
  }
]

for (const page of pages) {
  await renderHelper(page)
}









