import * as ethers from "ethers"
import SimplePOSFactory from "../contracts/SimplePOSFactory.json"
import { provider } from "./provider"

const SPOS_FACTORY_ADDRESS_RINKEBY = "0x2721FF699963CE97297F22b82fde933Eb33cF1B3"

const getPOSDeploymentData = (
  exchangeAddress: string,
  curveCoefficient: number,
  commission: number,
  initialRatio: number,
  sposTokenName: string,
  sposTokenSymbol: string,
): string => {
  const contract = new ethers.Contract(SPOS_FACTORY_ADDRESS_RINKEBY, SimplePOSFactory.abi, provider)
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

export { getPOSDeploymentData, SPOS_FACTORY_ADDRESS_RINKEBY }
