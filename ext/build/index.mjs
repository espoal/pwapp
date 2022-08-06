import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { tailwindPlugin } from '@libs/tailwind'
import { vendorsResolver } from './src/vendorsResolver.mjs'
import { watchHelper } from './src/watchHelper.mjs'
import { timeNow } from './src/timeNow.mjs'

const currentVersion = '0.0.1'

const loader = {
  '.mjs': 'jsx'
}

let ignoreCss = {
  name: 'empty-css-imports',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, () => ({ contents: '' }))
  },
}

const baseOptions = {
  outdir: 'dist/public/',
  plugins: [ vendorsResolver({ currentVersion }), tailwindPlugin, pnpPlugin()],
  bundle: true,
  splitting: false,
  format: 'esm',
  publicPath: '/',
  platform: 'browser',
  target: 'esnext',
  // minify: isProd,
  treeShaking: true,
  loader,
  outExtension: { '.js': '.mjs' },
}

const serverOptions = {
  plugins: [ vendorsResolver({ ssr: true }), ignoreCss, pnpPlugin()],
  platform: 'node'

}

export const buildHelper = async ({
  name,
  entryPoints = [ 'No entrypoint specified' ],
  external = [],
  outDir = '',
  ssr = false,
  isProd = false,
  versioning = false
}) => {

  const options = {
    ...baseOptions,
    entryPoints,
    external,
    outdir: 'dist/public/' + outDir,
  }

  if (isProd) {
    options.minify = true
  } else {
    options.watch = watchHelper(name)
  }

  if (versioning) {
    options.entryNames = `[dir]/[name]-${currentVersion}`
  }



  if (ssr)
    await esbuild.build({ ...options, ...serverOptions })
  else
    await esbuild.build(options)

  console.log('Build successful at time: ' + timeNow() + ' for: ' + name)


}
