import resolveConfig from 'tailwindcss/resolveConfig.js'
import { tailwindConfig } from './tailwind.config.mjs'
import { writeFile } from 'fs/promises'


const config = resolveConfig(tailwindConfig)

const configString = JSON.stringify(config, null, 2)
await writeFile('resolvedConfig.mjs', `export const resolvedConfig = ${configString}`)
