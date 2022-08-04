import { buildHelper } from '@espoal/build'


buildHelper({
  entryPoints: ['vendors/misc/resolvedConfig.mjs'],
  outDir: 'vendors/'
})

// React

buildHelper({
  entryPoints: ['vendors/react/react.mjs'],
  outDir: 'vendors/'
})

buildHelper({
  entryPoints: ['vendors/react/server.mjs'],
  outDir: 'vendors/',
  // ssr: true
})

// Charts

buildHelper({
  entryPoints: ['vendors/charts/charts.mjs'],
  outDir: 'vendors/'
})

buildHelper({
  entryPoints: ['vendors/misc/misc.mjs'],
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

buildHelper({
  entryPoints: ['main/server.mjs'],
  ssr: true
})
