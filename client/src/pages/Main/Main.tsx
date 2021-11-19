import React, { useEffect } from 'react'
import LiquidityValueCalculator from '../../contracts/LiquidityValueCalculator.json';

import { getWeb3 } from '../../helpers'

const Main = () => {
  useEffect(async () => {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();

    const deployedNetwork = LiquidityValueCalculator.networks[networkId];
    const contract = await new web3.eth.Contract(
      LiquidityValueCalculator.abi,
      deployedNetwork && deployedNetwork.address,
    );

    console.log('instance', contract);

    const output = await contract.methods.getPriceOfToken("0x00004ee988665cdda9a1080d5792cecd16dc1220", "10").call();
    console.log('output', output);
  }, [])

  return (
    <div>Main Page</div>
  )
}

export { Main }
