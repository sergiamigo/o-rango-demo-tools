import { postcss } from '@stencil/postcss';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const cssnano = require('cssnano');

export const config: Config = {
  namespace: 'orango-demo-tools',
  plugins: [
    sass({
      includePaths: ['node_modules/'],
    }),
    postcss({
      plugins: [
        cssnano({
          preset: [
            'default',
            {
              autoprefixer: { browsers: 'start', add: true },
            },
          ],
        }),
      ],
    }),
  ],
  preamble: 'O-RANGO - MIT License',
  globalStyle: 'src/components/styles/global.scss',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'dt.css',}
      ]
    },
    { type: 'dist' },
    { type: 'docs' },
    { type: 'stats', file: 'stats.json' },
  ],
};




