module.exports = {
    env: {
      node: true // Add this line to enable Node.js environment
    },
    globals: {
      process: 'readonly', // Add global variables here
      __dirname: 'readonly',
      module: 'readonly',
      require: 'readonly'
    }
  };
  