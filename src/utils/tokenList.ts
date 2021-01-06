interface Token {
  address: string
  logoUrl: string
  name: string
  decimals: number
  exchange: string
}

const allowedTokens: Token[] = [
  {
    address: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
    logoUrl:
      "https://gnosis-safe-token-logos.s3.amazonaws.com/0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359.png",
    name: "DAI",
    decimals: 18,
    exchange: "0x9c92A4582Ad8e3D731a73B47B2C6e32Cc0fE9CD9",
  },
]

const getUniswapExchangeAddress = (tokenAddress: string): string | undefined =>
  allowedTokens.find(({ address }) => address === tokenAddress)?.exchange

export { allowedTokens, getUniswapExchangeAddress }
