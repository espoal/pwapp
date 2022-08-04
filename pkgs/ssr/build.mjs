import { buildHelper } from '@espoal/build'

buildHelper({
  entryPoints: ['server.mjs'],
  external: ['react', 'react-dom', 'react-router-dom', '@vendors/react', '@vendors/charts'],
  outDir: 'ssr/'
})
