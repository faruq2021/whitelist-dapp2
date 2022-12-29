require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://thrilling-proportionate-emerald.ethereum-goerli.discover.quiknode.pro/1e96b48574f9e3b868264a87c2cf5fcf06100e60/",
      accounts: ["0d882292bc9c2718a3fe4be39831ccefa8b9cf2a8a7257f32b718774b8ec3b7f"],
      
    },
  },
};