import { readdir, writeFile } from 'fs/promises'

const basePath = '/home/mamluk/Projects/pwapp/dist/public'

const readDirs = async (path, base = '/') => {

  const result = []

  const readResults = await readdir(
    path,
    { withFileTypes: true })

  for (const readResult of readResults) {
    const { name } = readResult
    if ( readResult.isDirectory() ) {
      const newPath = `${path}/${name}`
      const newBase = `${base}${name}/`
      result.push(...await readDirs(newPath, newBase))
    } else {
      result.push(base + name)
    }
  }

  return result
}



const res = await readDirs(basePath)

await writeFile(
  `/home/mamluk/Projects/pwapp/pkgs/serviceWorker/cache.mjs`,
  `export const cachedList = ${JSON.stringify(res, null, 2)}`
  )

