import React from "react"
import { Field } from "formik"
import { Pane, Text } from "evergreen-ui"
import { WizardStep } from "../../components/forms/MultistepWizard"
import Input from "../../components/forms/Input"
import Select from "../../components/forms/Select"
import { allowedTokens } from "../../utils/tokenList"

const BonusPoolToken = (): React.ReactElement => {
  return (
    <WizardStep>
      <Pane height={500} display="flex" flexDirection="column">
        <Text>Please select a bonus pool token accumulated from all incoming payments</Text>
        <Field
          component={Select}
          id="exchangeToken"
          name="exchangeToken"
          marginTop={8}
          maxHeight={32}
        >
          {allowedTokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.name}
            </option>
          ))}
        </Field>
        <Text marginTop="default">
          We need to set an initial ratio of the SimplePOS tokens minted compared to initial bonus
          tokens:
        </Text>
        <Field
          component={Input}
          name="initialRatio"
          id="initialRatio"
          step={1}
          type="number"
          label="Initial ratio"
          required
          marginTop="8"
        />
        <Text marginTop="default">
          You need to send some ETH to exchange it for bonus tokens (we use Uniswap). Initial
          SimplePOS tokens will be minted for your Safe address in the ratio from the previous step.
        </Text>
        <Field
          component={Input}
          type="number"
          id="ethValue"
          name="ethValue"
          step={1}
          required
          label="Value"
          marginTop="8"
        />
      </Pane>
    </WizardStep>
  )
}

export default BonusPoolToken
