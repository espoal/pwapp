import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { tailwindConfig } from './tailwind.config.mjs'

const tail = tailwind(tailwindConfig)

export const tailwindPlugin = sassPlugin({async transform(source, resolveDir) {
  //console.log({ resolveDir })
    const {css} = await postcss([
      tail,
      autoprefixer
      // TODO: check from option
    ]).process(source, { from: resolveDir})
    return css
  }})
