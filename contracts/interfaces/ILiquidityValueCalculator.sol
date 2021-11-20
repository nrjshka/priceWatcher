pragma solidity ^0.6.6;

interface ILiquidityValueCalculator {
  function getPriceOfToken(address tokenA, address tokenB) external view returns(uint);
}