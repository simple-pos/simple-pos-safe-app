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
  const paymentFees = getRandomPaymentFees(paymentsAmount, commission)

  const graph = [
    {
      pool: incentivizationPool,
      tokens: initialTokenSupply,
      price: incentivizationPool / initialTokenSupply,
    },
  ]
  for (let i = 1; i < paymentsAmount; i++) {
    const { pool, price, tokens } = graph[i - 1]

    const invariant = pool / tokens
    const curveFee = paymentFees[i - 1] * curveCoefficient
    const newIdpForInvariant = pool + paymentFees[i - 1] - curveFee
    const tokensToMint = newIdpForInvariant / invariant - tokens
    console.log({ tokensToMint, newIdpForInvariant, invariant, curveFee })
    graph.push({
      pool: pool + paymentFees[i - 1],
      price: newIdpForInvariant / tokens + tokensToMint,
      tokens: tokens + tokensToMint,
    })
  }

  return graph
}
