const UNISWAP_DAI_ETH_RATIO = 500

const getRndInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomPaymentFees = (amount: number, commission: number): number[] => {
  const payments = []

  for (let i = 0; i < amount; i++) {
    payments.push(getRndInteger(1, 50) * commission)
  }

  return payments
}

export type GraphPoint = { pool: number; price: number; tokens: number }

export const calculateGraphValues = (
  ethValue: number,
  bonusTokenRatio: number,
  curveCoefficient: number,
  commission: number,
  paymentsAmount: number,
): GraphPoint[] => {
  const incentivizationPool = ethValue * UNISWAP_DAI_ETH_RATIO
  const initialTokenSupply = incentivizationPool * bonusTokenRatio
  console.log({
    ethValue,
    bonusTokenRatio,
    curveCoefficient,
    commission,
    paymentsAmount,
  })
  const tokenPrices = [incentivizationPool / initialTokenSupply]
  const pools = [incentivizationPool]
  const tokens = [initialTokenSupply]
  const paymentFees = getRandomPaymentFees(paymentsAmount, commission)
  console.log({ paymentFees })
  const graph = [
    {
      pool: incentivizationPool,
      tokens: initialTokenSupply,
      price: incentivizationPool / initialTokenSupply,
    },
  ]
  for (let i = 1; i < paymentsAmount; i++) {
    const invariant = pools[i - 1] / tokens[i - 1]
    const curveFee = paymentFees[i - 1] * curveCoefficient
    const newIdpForInvariant = pools[i - 1] + paymentFees[i - 1] - curveFee
    const tokensToMint = newIdpForInvariant / invariant - tokens[i - 1]

    tokenPrices.push(newIdpForInvariant / (tokens[i - 1] + tokensToMint))
    pools.push(paymentFees[i - 1])
    tokens.push(tokensToMint)

    graph.push({
      pool: paymentFees[i - 1],
      price: newIdpForInvariant / (tokens[i - 1] + tokensToMint),
      tokens: tokensToMint,
    })
  }

  return graph
}
