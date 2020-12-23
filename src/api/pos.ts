import * as ethers from "ethers"
import SimplePOS from "../contracts/SimplePOS.json"

const createPOS = (
  exchangeAddress: string,
  curveCoefficient: number,
  commission: number,
  initialRatio: number,
  sposTokenName: string,
  sposTokenSymbol: string,
) => {
  const contract = new ethers.ContractFactory(SimplePOS.abi, SimplePOS.bytecode)
  const deploymentData = contract.interface.encodeFunctionData("constructor", [
    exchangeAddress,
    sposTokenName,
    sposTokenSymbol,
    initialRatio,
    commission,
    curveCoefficient,
  ])

  console.log(deploymentData)
}

export { createPOS }
