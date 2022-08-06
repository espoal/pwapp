import { buildHelper } from '@espoal/build'
import process, {argv} from 'node:process'

// React
const versioning = true
let isProd = false
if ( argv.includes('prod') ) {
  process.env.NODE_ENV = 'production'
  isProd = true
}

console.log(`Starting ${isProd ? 'production' : 'dev' } build`)

await buildHelper({
  name: '@vendors/react',
  entryPoints: [
    'vendors/react/react.mjs',
    'vendors/react/server.mjs',
  ],
  outDir: 'vendors/',
  isProd,
  versioning
})

// Charts

await buildHelper({
  name: '@vendors/charts',
  entryPoints: ['vendors/charts/charts.mjs'],
  outDir: 'vendors/',
  isProd,
  versioning
})

// Misc

await buildHelper({
  name: '@vendors/misc',
  entryPoints: [
    'vendors/misc/misc.mjs',
    'vendors/misc/resolvedConfig.mjs'
  ],
  outDir: 'vendors/',
  isProd,
  versioning
})

// App

await buildHelper({
  name: 'main/client',
  entryPoints: ['main/index.mjs'],
  isProd
})

await buildHelper({
  name: '@pkgs/auth',
  entryPoints: ['pkgs/auth/Auth.mjs'],
  isProd
})

// Sevice Worker

await buildHelper({
  name: '@pkgs/serviceWorker',
  entryPoints: ['pkgs/serviceWorker/sw.mjs', 'pkgs/serviceWorker/register.mjs'],
  isProd
})

// SSR

await buildHelper({
  name: 'main/ssr',
  entryPoints: ['main/ssr.mjs'],
  ssr: true,
  isProd
})

if (isProd && false) {
  // TODO: handle critical css
  console.log('Build done. Starting SSR.')
  await import('./dist/public/ssr.mjs')
}


