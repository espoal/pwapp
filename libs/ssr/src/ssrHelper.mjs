import { pageRenderer } from './pageRenderer.mjs'
import { fireBaseFactory } from './firebaseFactory.mjs'
import { writeFile } from 'node:fs/promises'

export const ssrHelper = async ({ pages, jsx }) => {

  for (const page of pages) {
    await pageRenderer({ ...page, jsx })
  }

  //pageRenderer({})

  const firebaseJson = fireBaseFactory({ pages })

  await writeFile(
    `./firebase.json`,
    JSON.stringify(firebaseJson, null, 2)
  )

}
