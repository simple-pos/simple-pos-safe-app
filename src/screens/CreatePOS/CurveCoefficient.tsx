import React from "react"
import { Field } from "formik"
import { TextInput } from "evergreen-ui"
import { WizardStep } from "../../components/forms/MultistepWizard"

const CurveCoefficient = (): React.ReactElement => {
  return (
    <WizardStep>
      <p>
        The curve coefficient influences the amount of minted SimplePOS tokens for incoming
        payments. Be aware that the contract deployment parameters are immutable and can not be
        changed in the future.
      </p>
      <label htmlFor="curveCoefficient">Curve Coefficient:</label>
      <Field
        component={TextInput}
        name="curveCoefficient"
        id="curveCoefficient"
        step={1}
        type="number"
      />
      <p>
        On the graph below you can simulate how the SimplePOS token price might change with time
        depending on expected incoming payments.
      </p>
      <button>Create a point of sale</button>
    </WizardStep>
  )
}

export default CurveCoefficient
