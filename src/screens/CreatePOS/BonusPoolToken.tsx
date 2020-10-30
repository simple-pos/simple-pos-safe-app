import React from "react"
import { Field } from "formik"
import { TextInput } from "evergreen-ui"
import { WizardStep } from "../../components/forms/MultistepWizard"
import { allowedTokens } from "../../utils/tokenList"

const BonusPoolToken = (): React.ReactElement => {
  return (
    <WizardStep>
      <p>Please select a bonus pool token accumulated from all incoming payments</p>
      <label htmlFor="exchangeToken">Token:</label>
      <Field component="select" id="exchangeToken" name="exchangeToken">
        {allowedTokens.map((token) => (
          <option key={token.address} value={token.address}>
            {token.name}
          </option>
        ))}
      </Field>
      <p>
        We need to set an initial ratio of the SimplePOS tokens minted compared to initial bonus
        tokens:
      </p>
      <label htmlFor="initialRatio">Initial ratio:</label>
      <Field component={TextInput} name="initialRatio" id="initialRatio" step={1} type="number" />
      <p>
        You need to send some ETH to exchange it for bonus tokens (we use Uniswap). Initial
        SimplePOS tokens will be minted for your Safe address in the ratio from the previous step.
      </p>
      <label htmlFor="ethValue">Value:</label>
      <Field component={TextInput} type="number" id="ethValue" name="ethValue" step={1} />
    </WizardStep>
  )
}

export default BonusPoolToken
