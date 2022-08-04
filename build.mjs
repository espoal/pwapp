import { buildHelper } from '@espoal/build'

// React

buildHelper({
  entryPoints: [
    'vendors/react/react.mjs',
    'vendors/react/server.mjs',
  ],
  outDir: 'vendors/'
})

// Charts

buildHelper({
  entryPoints: ['vendors/charts/charts.mjs'],
  outDir: 'vendors/'
})

// Misc

buildHelper({
  entryPoints: [
    'vendors/misc/misc.mjs',
    'vendors/misc/resolvedConfig.mjs'
  ],
  outDir: 'vendors/'
})

// App

buildHelper({
  entryPoints: ['main/index.mjs'],
})

buildHelper({
  entryPoints: ['pkgs/auth/Auth.mjs'],
})

// SSR

buildHelper({
  entryPoints: ['main/ssr.mjs'],
  ssr: true
})
