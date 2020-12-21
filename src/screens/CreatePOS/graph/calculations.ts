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

export type GraphPoint = { payment: number; pool: number; price: number; tokens: number }

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

  const graph: GraphPoint[] = [
    {
      payment: 0,
      pool: incentivizationPool,
      tokens: initialTokenSupply,
      price: incentivizationPool / initialTokenSupply,
    },
  ]
  for (let i = 0; i < paymentsAmount; i++) {
    const { pool, tokens } = graph[i]

    const invariant = pool / tokens
    const curveFee = paymentFees[i] * curveCoefficient
    const newIdpForInvariant = pool + paymentFees[i] - curveFee
    const tokensToMint = newIdpForInvariant / invariant - tokens

    const newPool = pool + paymentFees[i]
    const newTokenSupply = tokens + tokensToMint

    graph.push({
      payment: i + 1,
      pool: newPool,
      price: newPool / newTokenSupply,
      tokens: tokens + tokensToMint,
    })
  }

  return graph
}
