const UniswapV2FactoryContract = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

const LiquidityValueCalculator = artifacts.require("./LiquidityValueCalculator.sol");


module.exports = function(deployer) {
  deployer.deploy(LiquidityValueCalculator, UniswapV2FactoryContract);
};
