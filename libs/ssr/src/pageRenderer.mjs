import { writeFile } from 'node:fs/promises'
import { ReactDOMServer } from '@vendors/react/server.mjs'

const decoder = new TextDecoder()

const helmetParser = ({ helmet }) => {

  let head = ''

  console.log(helmet.title.toString())

  for (const tag in helmet) {
    head += helmet[tag].toString() + ' '
  }

  return head
}

export const pageRenderer = async ({ location, jsx, html }) => {

  const helmetContext = {}

  const stream =
    await ReactDOMServer.renderToReadableStream(jsx(location, helmetContext), {})

  console.log({ location })
  const head = helmetParser(helmetContext)

  let content = ''

  for await (const u8chunk of stream)
    content += decoder.decode(u8chunk)

  // console.log({ cwd: process.cwd() })

  await writeFile(
    `dist/public/ssr${location}/index.html`,
    html({ content, head }))

}
