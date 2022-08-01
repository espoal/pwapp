
export const vendorsResolver = (currentVersion = '0.0.1') => ({
  name: 'example',
  setup(build) {
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^@vendors/ }, args => {
      const pkg = args.path.split('/').pop()
      // console.log({args, pkg})
      // return { path: `/vendors/${pkg}${currentVersion}.mjs`, external: true }
      return { path: `/vendors/${pkg}.mjs`, external: true }

    })
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      // console.log({args})
      return { path: args.path, external: true }
    })

    // Mark all paths starting with 'data:' as external
    build.onResolve({ filter: /^data:/ }, args => {
      // console.log({args})
      return { path: args.path, external: true }
    })

    build.onResolve({ filter: /.html/ }, async args => {
      if (args.pluginData) return // Ignore this if we called ourselves
      // TODO: dont treeshake files

      // console.log({args})

      const { path, ...rest } = args
      rest.pluginData = true // Avoid infinite recursion
      const result = await build.resolve(path, rest)

      result.sideEffects = true
      return result
    })
  },
})
