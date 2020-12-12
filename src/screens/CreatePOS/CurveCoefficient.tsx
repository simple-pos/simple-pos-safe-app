import React from "react"
import { Field } from "formik"
import { Text, Pane } from "evergreen-ui"
import { WizardStep } from "../../components/forms/MultistepWizard"
import Input from "../../components/forms/Input"
import SimulationGraphs from "./SimulationGraphs"
import { CreatePOSFormValues } from "./formValues"
import { calculateGraphValues } from "./utils/calculations"

type Props = {
  values?: CreatePOSFormValues
}

const CurveCoefficient = ({ values }: Props): React.ReactElement => {
  // @ts-expect-error this is passed from multistep, needs a fix
  const { ethValue, initialRatio, commission, curveCoefficient } = values
  const graphData = calculateGraphValues(
    ethValue,
    initialRatio,
    parseFloat(curveCoefficient),
    parseFloat(commission),
    1000,
  )
  console.log({ graphData })
  return (
    <WizardStep>
      <Pane height={500} display="flex" flexDirection="column">
        <Text>
          The curve coefficient influences the amount of minted SimplePOS tokens for incoming
          payments. Be aware that the contract deployment parameters are immutable and can not be
          changed in the future.
        </Text>
        <Field
          component={Input}
          name="curveCoefficient"
          id="curveCoefficient"
          label="Curve Coefficient"
          step={1}
          type="number"
          required
          marginTop={8}
        />
        <Text>
          On the graph below you can simulate how the SimplePOS token price might change with time
          depending on expected incoming payments.
        </Text>
        <SimulationGraphs data={graphData} />
      </Pane>
    </WizardStep>
  )
}

export default CurveCoefficient
