export const INITIAL_VALUES = {
  curveCoefficient: "1",
  sposTokenName: "",
  sposTokenSymbol: "",
  commission: "",
  exchangeToken: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
  initialRatio: "",
  ethValue: "",
} as const

export type CreatePOSFormValues = typeof INITIAL_VALUES
