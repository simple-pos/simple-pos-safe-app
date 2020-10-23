import React, { useState } from "react"
import styled from "styled-components"
import { BackButton } from "evergreen-ui"
// import { useSafe } from "@rmeissner/safe-apps-react-sdk"

import { allowedTokens } from "../../utils/tokenList"

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

type OwnProps = {
  back: () => void
}

const CreatePOS = ({ back }: OwnProps): React.ReactElement => {
  // const safe = useSafe()
  const [selectedToken, setSelectedToken] = useState("")
  const [sposTokenName, setSposTokenName] = useState("")
  const [sposTokenSymbol, setSposTokenSymbol] = useState("")
  const [initialRatio, setInitialRatio] = useState(1)
  const [commission, setCommission] = useState(0.05)
  const [curveCoefficient, setCurveCoefficient] = useState(0.5)
  const [ethValue, setEthValue] = useState(0.01)

  return (
    <Container>
      <p>Please select a bonus pool token accumulated from all incoming payments</p>
      <label htmlFor="exchangeToken">Token:</label>
      <select
        id="exchangeToken"
        onChange={(e) => setSelectedToken(e.target.value)}
        value={selectedToken}
      >
        {allowedTokens.map((token) => (
          <option key={token.address} value={token.address}>
            {token.name}
          </option>
        ))}
      </select>
      <p>
        We need to set an initial ratio of the SimplePOS tokens minted compared to initial bonus
        tokens:
      </p>
      <label htmlFor="initialRatio">Initial ratio:</label>
      <input
        name="initialRatio"
        id="initialRatio"
        step={1}
        type="number"
        value={initialRatio}
        onChange={(e) => setInitialRatio(+e.target.value)}
      />
      <p>
        You need to send some ETH to exchange it for bonus tokens (we use Uniswap). Initial
        SimplePOS tokens will be minted for your Safe address in the ratio from the previous step.
      </p>
      <label htmlFor="ethValue">Value:</label>
      <input
        type="number"
        id="ethValue"
        value={ethValue}
        onChange={(e) => setEthValue(+e.target.value)}
      />
      <p>
        This contract will manage SimplePOS tokens that control the bonus pool tokens. A commission
        from all incoming payments will be converted into bonus pool tokens and SimplePOS tokens
        will be minted accordingly.
      </p>
      <label htmlFor="sposTokenName">SimplePOS token name:</label>
      <input
        type="text"
        value={sposTokenName}
        onChange={(e) => setSposTokenName(e.target.value)}
        placeholder="Award Token"
      />
      <label htmlFor="sposTokenSymbol">SimplePOS token symbol:</label>
      <input
        type="text"
        placeholder="AWD"
        id="sposTokenSymbol"
        value={sposTokenSymbol}
        onChange={(e) => setSposTokenSymbol(e.target.value)}
      />
      <label htmlFor="commission">Commission for incoming payments:</label>
      <input
        name="commission"
        id="commission"
        type="number"
        value={commission}
        onChange={(e) => setCommission(+e.target.value)}
      />
      <p>
        The curve coefficient influences the amount of minted SimplePOS tokens for incoming
        payments. Be aware that the contract deployment parameters are immutable and can not be
        changed in the future.
      </p>
      <label htmlFor="curveCoefficient">Curve Coefficient:</label>
      <input
        type="number"
        id="curveCoefficient"
        value={curveCoefficient}
        onChange={(e) => setCurveCoefficient(+e.target.value)}
      />
      <p>
        On the graph below you can simulate how the SimplePOS token price might change with time
        depending on expected incoming payments.
      </p>
      <button>Create a point of sale</button>
      <BackButton onClick={back} />
    </Container>
  )
}

export default CreatePOS
