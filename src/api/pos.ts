import * as ethers from "ethers"
import SimplePOS from "../contracts/SimplePOS.json"

const getPOSDeploymentData = (
  exchangeAddress: string,
  curveCoefficient: number,
  commission: number,
  initialRatio: number,
  sposTokenName: string,
  sposTokenSymbol: string,
): string => {
  const contract = new ethers.ContractFactory(SimplePOS.abi, SimplePOS.bytecode)
  const { data: deploymentData } = contract.getDeployTransaction(
    exchangeAddress,
    sposTokenName,
    sposTokenSymbol,
    initialRatio,
    commission * 10000,
    curveCoefficient * 10000,
  )

  if (typeof deploymentData !== "string") {
    throw new Error(
      `Error encoding deployment data, received value isn't string. Value: ${deploymentData}`,
    )
  }

  return deploymentData
}

export { getPOSDeploymentData }
