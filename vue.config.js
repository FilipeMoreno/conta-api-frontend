module.exports = {
    devServer: {
      port: 4200,
      proxy: {
        '^/api': {
          target: 'http://localhost:8081/',
          changeOrigin: true,
        },
      },
    },
  };