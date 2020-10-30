import React from "react"
import { Field } from "formik"
import Input from "../../components/forms/Input"
import { WizardStep } from "../../components/forms/MultistepWizard"

const SimplePOSToken = (): React.ReactElement => {
  return (
    <WizardStep>
      <p>
        This contract will manage SimplePOS tokens that control the bonus pool tokens. A commission
        from all incoming payments will be converted into bonus pool tokens and SimplePOS tokens
        will be minted accordingly.
      </p>
      <label htmlFor="sposTokenName">SimplePOS token name:</label>
      <Field component={Input} name="sposTokenName" id="sposTokenName" type="text" />
      <label htmlFor="sposTokenSymbol">SimplePOS token symbol:</label>
      <Field component={Input} name="sposTokenSymbol" id="sposTokenSymbol" type="text" />
      <label htmlFor="commission">Commission for incoming payments:</label>
      <Field component={Input} name="commission" id="commission" type="text" />
    </WizardStep>
  )
}

export default SimplePOSToken
