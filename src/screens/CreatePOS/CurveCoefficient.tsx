import React from "react"
import { Field } from "formik"
import { Text, Pane } from "evergreen-ui"
import { WizardStep } from "../../components/forms/MultistepWizard"
import Input from "../../components/forms/Input"
import SimulationGraph from "./graph/SimulationGraph"
import { CreatePOSFormValues } from "./formValues"
import { calculateGraphValues } from "./graph/calculations"

type Props = {
  values: CreatePOSFormValues
}

const CurveCoefficient = ({ values }: Props): React.ReactElement => {
  const { ethValue, initialRatio, commission, curveCoefficient } = values
  const graphData = calculateGraphValues(
    parseFloat(ethValue),
    parseFloat(initialRatio),
    parseFloat(curveCoefficient),
    parseFloat(commission),
    500,
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
          step={0.1}
          type="number"
          required
          marginTop={8}
        />
        <Text>
          On the graph below you can simulate how the SimplePOS token price might change with time
          depending on expected incoming payments.
        </Text>
        <SimulationGraph data={graphData} dataKey="pool" />
        <SimulationGraph data={graphData} dataKey="price" />
        <SimulationGraph data={graphData} dataKey="tokens" />
      </Pane>
    </WizardStep>
  )
}

export default CurveCoefficient
