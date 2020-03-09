const config = {
  webpack(config) {
    config.node = {
      fs: "empty",
      module: "empty"
    };

    config.module.rules.unshift({
      test: /\.worker\.js/,
      use: {
        loader: "worker-loader",
        options: {
          name: "static/[hash].worker.js",
          publicPath: "/_next/"
        }
      }
    });

    config.output.globalObject = 'typeof self !== "object" ? self : this';

    // Temporary fix for https://github.com/zeit/next.js/issues/8071
    config.plugins.forEach(plugin => {
      if (plugin.definitions && plugin.definitions["typeof window"]) {
        delete plugin.definitions["typeof window"];
      }
    });

    return config;
  }
};

module.exports = config;
