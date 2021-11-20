import React, { useEffect } from 'react'

import LiquidityValueCalculator from '../../contracts/LiquidityValueCalculator.json';
import IUniswapV2Router02 from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";
import IUniswapV2Factory from "@uniswap/v2-core/build/IUniswapV2Factory.json";
import IUniswapV2Pair from "@uniswap/v2-core/build/IUniswapV2Pair.json";



import { getWeb3 } from '../../helpers'

const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

// type NetworkIds = keyof typeof IUniswapV2Factory.networks;

const Main = () => {
  async function test() {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();
    const block = await web3.eth.getBlockNumber();
    console.log('block', block);

    // @ts-ignore
    const networkId: NetworkIds = await web3.eth.net.getId();

    // const deployedNetwork = IUniswapV2Factory.networks[networkId];
    // const contract = await new web3.eth.Contract(
    //   LiquidityValueCalculator.abi as any,
    //   deployedNetwork && deployedNetwork.address,
    // );
    const uniFactory = await new web3.eth.Contract(
      IUniswapV2Factory.abi as any,
      // deployedNetwork && deployedNetwork.address,
      "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
    );

    // const uniContract = await new web3.eth.Contract(
    //   IUniswapV2Router02.abi as any,
    //   deployedNetwork && deployedNetwork.address,
    // )
    console.log('uniFactory', uniFactory);
    console.log('methods', uniFactory.methods);

    // console.log('contract', contract);

    // const output = await contract.methods.getPriceOfToken("0x00004ee988665cdda9a1080d5792cecd16dc1220", "10").call();
    // const output = await contract.methods.pairInfo("0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc", "0x6B175474E89094C44Da98b954EedeAC495271d0F").call();
    // const output = await contract.methods.getPriceOfToken("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "0x6B175474E89094C44Da98b954EedeAC495271d0F").call();

    // const output = await uniContract.methods.WETH().call();
    const output = await uniFactory.methods.getPair("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984").call();
    const pairAddress = await uniFactory.methods.getPair("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984").call();

    console.log('pairAddress', pairAddress);

    const uniPair = await new web3.eth.Contract(
      IUniswapV2Pair.abi as any,
      pairAddress,
    );

    console.log('uniPair', uniPair);
    console.log('methods', uniPair.methods);

    const { reserve0, reserve1 } = await uniPair.methods.getReserves().call();

    console.log('output', output);
    console.log('reserver0', reserve0);
    console.log('reserve1', reserve1);
  }

  useEffect(() => {
    test()
  }, [])

  return (
    <div>Main Page</div>
  )
}

export { Main }
