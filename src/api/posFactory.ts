import * as ethers from "ethers"
import SimplePOSFactory from "../contracts/SimplePOSFactory.json"
import { provider } from "./provider"

const getPOSDeploymentData = (
  exchangeAddress: string,
  curveCoefficient: number,
  commission: number,
  initialRatio: number,
  sposTokenName: string,
  sposTokenSymbol: string,
): string => {
  const contract = new ethers.Contract("", SimplePOSFactory.abi, provider)
  const txData = contract.interface.encodeFunctionData("createPOS", [
    exchangeAddress,
    sposTokenName,
    sposTokenSymbol,
    initialRatio,
    commission * 10000,
    curveCoefficient * 10000,
  ])

  return txData
}

export { getPOSDeploymentData }
