import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const isProduction = process.env.NODE_ENV === 'production';
export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/dinaank.js',
      format: 'umd',
      name: 'Dinaank'
    },
    {
      file: 'dist/dinaank.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    postcss({
      extract: 'dinaank.css',
      modules: false,
      plugins: [autoprefixer()],
      minimize: isProduction,
    }),
    typescript(),
    babel({ 
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts']
    }),
    resolve(),
    commonjs(),
    terser({
      compress: {
        drop_console: isProduction,
        pure_funcs: ['console.log'],
      },
    })
  ]
};

console.log("File name: rollup.config.js, 🛠️📦, line 45, function: export default; isProduction:", isProduction);
