import * as ethers from "ethers"

const provider = ethers.getDefaultProvider("rinkeby", {
  infura: "82b8340f4bd146a2bfc606609ffbec41",
})

export { provider }
