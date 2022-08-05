import { React } from '@vendors/react'
import { StaticRouter } from '@vendors/react/server.mjs'
import { indexHtml } from './index.html.mjs'
import { ssrHelper } from '@libs/ssr'

import { App } from './App.mjs'

const jsx = (location, helmetContext) =>
  (<React.StrictMode>
    <StaticRouter location={location}>
      <App {...{helmetContext}}/>
    </StaticRouter>
  </React.StrictMode>)


const pages = [
  {
    location: '/dash',
    html: indexHtml
  },
  {
    location: '/auth/login',
    html: indexHtml
  }
]

await ssrHelper({ pages, jsx })









