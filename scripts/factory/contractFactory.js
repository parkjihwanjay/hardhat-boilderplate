/* eslint-disable new-cap */
const address = require("../address");
const ethers = require("../provider");

const getBuildFilePath = (fileName) => {
  return `../../hardhat/artifacts/src/${fileName}.sol/${fileName}.json`;
};

const PriceOracleViewV2 = require(getBuildFilePath("PriceOracleViewV2"));

const contractFactory = {
  usePriceOracleViewV2: () => {
    return new ethers.Contract(
      address.contract.PriceOracleViewV2,
      PriceOracleViewV2.abi
    );
  },
};

module.exports = contractFactory;
