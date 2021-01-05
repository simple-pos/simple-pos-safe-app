import React from "react"
import styled from "styled-components"
import { BackButton, Pane } from "evergreen-ui"
import { Transaction } from "@gnosis.pm/safe-apps-sdk"
import { useSafeAppsSDK } from "@gnosis.pm/safe-apps-react-sdk"

import { INITIAL_VALUES, CreatePOSFormValues } from "./formValues"
import Wizard from "../../components/forms/MultistepWizard"
import BonusPoolToken from "./BonusPoolToken"
import SimplePOSToken from "./SimplePOSToken"
import CurveCoefficient from "./CurveCoefficient"
import { getPOSDeploymentData } from "../../api/posFactory"

const Container = styled.div`
  margin-bottom: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SBackBtn = styled(BackButton)`
  position: fixed;
  top: 15px;
  left: 15px;
`

type OwnProps = {
  back: () => void
}

const CreatePOS = ({ back }: OwnProps): React.ReactElement => {
  const { sdk } = useSafeAppsSDK()

  const submitHandler = (val: CreatePOSFormValues): void => {
    const deploymentData = getPOSDeploymentData(
      "0x0000000000000000000000000000000000000000",
      parseFloat(val.curveCoefficient),
      parseFloat(val.commission),
      parseFloat(val.initialRatio),
      val.sposTokenName,
      val.sposTokenSymbol,
    )
    const txs: Transaction[] = [
      {
        to: "0x0000000000000000000000000000000000000000",
        value: val.ethValue,
        data: deploymentData,
      },
    ]

    sdk.txs.send({ txs })
  }

  return (
    <Container>
      <Pane maxWidth={900}>
        <Wizard<CreatePOSFormValues> onSubmit={submitHandler} initialValues={INITIAL_VALUES}>
          <BonusPoolToken />
          <SimplePOSToken />
          {/* @ts-expect-error component props type expects values prop, but it's injected inside Wizard  */}
          <CurveCoefficient />
        </Wizard>
      </Pane>
      <SBackBtn onClick={back} />
    </Container>
  )
}

export default CreatePOS
