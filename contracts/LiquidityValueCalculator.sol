pragma solidity ^0.6.6;

import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';

import './interfaces/IERC20.sol';
import './interfaces/ILiquidityValueCalculator.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
  address public factory;

  constructor(address factory_) public {
    factory = factory_;
  }

  function getPriceOfToken(address pairAddress, uint amount) external override view returns(uint) {
    // IUniswapV2Pair pair = IUniswapV2Pair(pairAddress);
    // IERC20 token1 = IERC20(pair.token1());

    // (uint Res0, uint Res1,) = pair.getReserves();

    // uint res0 = Res0 * (10 ** 18);

    // return (amount * res0) / Res1;
    return 0;
  }
}