import nodecfdiPrettierConfig from '@nodecfdi/prettier-config/pkg';

/** @type {import('prettier').Config} */
const config = {
  ...nodecfdiPrettierConfig,
  proseWrap: 'always',
};

export default config;
