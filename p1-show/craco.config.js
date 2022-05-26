const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#1e222d',
              // '@text-color':'#c1c6c8',
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
