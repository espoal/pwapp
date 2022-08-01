import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { tailwindPlugin } from '@libs/tailwind'
import { vendorsResolver } from './vendorsResolver.mjs'

const loader = {
  '.sh': 'file',
  '.png': 'file',
  '.jpg': 'file',
  '.mjs': 'jsx'
}

const baseOptions = {
  entryPoints: [ 'No entrypoint specified' ],
  outdir: 'dist/public/',
  plugins: [ vendorsResolver(), tailwindPlugin, pnpPlugin()],
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

export const buildHelper = async ({
  entryPoints,
  external,
  outDir = ''
}) => {
  await esbuild.build({
    ...baseOptions,
    entryPoints,
    external,
    outdir: 'dist/public/' + outDir
  })
}
