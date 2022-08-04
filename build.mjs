import { buildHelper } from '@espoal/build'
import process, {argv} from 'node:process'

// React

let isProd = false
if ( argv.includes('prod') ) {
  process.env.NODE_ENV = 'production'
  isProd = true
}

console.log({ isProd })

buildHelper({
  entryPoints: [
    'vendors/react/react.mjs',
    'vendors/react/server.mjs',
  ],
  outDir: 'vendors/',
  isProd
})

// Charts

buildHelper({
  entryPoints: ['vendors/charts/charts.mjs'],
  outDir: 'vendors/',
  isProd
})

// Misc

buildHelper({
  entryPoints: [
    'vendors/misc/misc.mjs',
    'vendors/misc/resolvedConfig.mjs'
  ],
  outDir: 'vendors/',
  isProd
})

// App

buildHelper({
  entryPoints: ['main/index.mjs'],
  isProd
})

buildHelper({
  entryPoints: ['pkgs/auth/Auth.mjs'],
  isProd
})

// SSR

buildHelper({
  entryPoints: ['main/ssr.mjs'],
  ssr: true,
  isProd
})
