pragma solidity ^0.6.6;

interface ILiquidityValueCalculator {
  function getPriceOfToken(address pairAddress, uint amount) external view returns(uint);
}