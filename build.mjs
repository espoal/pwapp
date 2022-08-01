import { buildHelper } from '@espoal/build'

buildHelper({
  entryPoints: ['vendors/react/react.mjs'],
  outDir: 'vendors/'
})

buildHelper({
  entryPoints: ['main/index.mjs'],
  external: ['@vendors/react']
})

buildHelper({
  entryPoints: ['pkgs/auth/Auth.mjs'],
  external: ['@vendors/react']
})
