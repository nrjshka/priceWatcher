import React, { useEffect } from 'react'
import LiquidityValueCalculator from '../../contracts/LiquidityValueCalculator.json';

import { getWeb3 } from '../../helpers'

type NetworkIds = keyof typeof LiquidityValueCalculator.networks;

const Main = () => {
  async function test() {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();

    // @ts-ignore
    const networkId: NetworkIds = await web3.eth.net.getId();

    const deployedNetwork = LiquidityValueCalculator.networks[networkId];
    const contract = await new web3.eth.Contract(
      LiquidityValueCalculator.abi as any,
      deployedNetwork && deployedNetwork.address,
    );

    console.log('contract', contract);

    const output = await contract.methods.getPriceOfToken("0x00004ee988665cdda9a1080d5792cecd16dc1220", "10").call();

    console.log('output', output)
  }

  useEffect(() => {
    test()
  }, [])

  return (
    <div>Main Page</div>
  )
}

export { Main }
