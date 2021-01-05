import * as ethers from "ethers"
import SimplePOSFactory from "../contracts/SimplePOSFactory.json"
import { provider } from "./provider"

const SPOS_FACTORY_ADDRESS_RINKEBY = "0xF8501781f5B13288f878B87290D758A9301d2920"

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
