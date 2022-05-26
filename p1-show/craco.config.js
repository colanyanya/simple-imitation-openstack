const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': 'rgb(47, 166, 0)',
              // '@text-color':'#c1c6c8',
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
