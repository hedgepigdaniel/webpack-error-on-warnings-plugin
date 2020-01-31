module.exports = (api) => {
  const esModules = api.env((envName) => envName.indexOf('es') !== -1);
  return {
    presets: [
      '@babel/preset-typescript',
      ['@babel/preset-env', {
        targets: {
          node: '6',
        },
        modules: esModules ? false : undefined,
      }],
    ],
  };
};
