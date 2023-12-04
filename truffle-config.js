module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Update with your Ganache port
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify your desired Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};