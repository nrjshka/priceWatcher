import React from 'react'

const PriceTracker = () => {
  return (
    <form>
      <div>
        <select>
          <option>ETH</option>
        </select>
        <input />
      </div>
      <div>
        <select>
          <option>USDC</option>
        </select>
        <input />
      </div>
      <div>1 ETH = 20 USDC</div>
    </form>
  )
}

export { PriceTracker }
