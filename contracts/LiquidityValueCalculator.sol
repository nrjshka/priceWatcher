pragma solidity ^0.6.6;

import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2ERC20.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';

import './interfaces/ILiquidityValueCalculator.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
  address public factory;

  constructor(address factory_) public {
    factory = factory_;
  }

  function getPriceOfToken(address tokenA, address tokenB) external override view returns(uint) {
    address pair = IUniswapV2Factory(factory).getPair(tokenA, tokenB);
    (uint left, uint right,) = IUniswapV2Pair(pair).getReserves();
    (uint tokenReserves, uint ethReserves) = (tokenA < tokenB) ?
        (left, right) : (right, left);
    return (ethReserves * 1000000) / tokenReserves;
  }

  function pairInfo(address tokenA, address tokenB) external view returns (uint reserveA, uint reserveB, uint totalSupply) {
    IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));
    totalSupply = pair.totalSupply();
    (uint reserves0, uint reserves1,) = pair.getReserves();
    (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);

    return (reserveA, reserveB, totalSupply);
  }
}