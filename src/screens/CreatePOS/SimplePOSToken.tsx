import React from "react"
import { Field } from "formik"
import { Text, Pane } from "evergreen-ui"
import Input from "../../components/forms/Input"
import { WizardStep } from "../../components/forms/MultistepWizard"

const SimplePOSToken = (): React.ReactElement => {
  return (
    <WizardStep>
      <Pane height={500} display="flex" flexDirection="column">
        <Text>
          This contract will manage SimplePOS tokens that control the bonus pool tokens. A
          commission from all incoming payments will be converted into bonus pool tokens and
          SimplePOS tokens will be minted accordingly.
        </Text>
        <Field
          component={Input}
          name="sposTokenName"
          id="sposTokenName"
          type="text"
          label="Token name"
          required
          marginTop={8}
        />
        <Field
          component={Input}
          name="sposTokenSymbol"
          id="sposTokenSymbol"
          type="text"
          label="Token symbol"
          required
        />
        <Field
          component={Input}
          name="commission"
          id="commission"
          type="number"
          step={0.01}
          label="Commission for incoming payments"
          required
        />
      </Pane>
    </WizardStep>
  )
}

export default SimplePOSToken
