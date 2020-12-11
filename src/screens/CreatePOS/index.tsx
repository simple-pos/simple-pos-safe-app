import React from "react"
import styled from "styled-components"
import { BackButton, Pane } from "evergreen-ui"
// import { useSafe } from "@rmeissner/safe-apps-react-sdk"

import Wizard from "../../components/forms/MultistepWizard"
import BonusPoolToken from "./BonusPoolToken"
import SimplePOSToken from "./SimplePOSToken"
import CurveCoefficient from "./CurveCoefficient"

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

const INITIAL_VALUES = {
  curveCoefficient: "1",
  sposTokenName: "",
  sposTokenSymbol: "",
  commission: "",
  exchangeToken: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
  initialRatio: "",
  ethValue: "",
} as const

type CreatePOSFormValues = typeof INITIAL_VALUES

const CreatePOS = ({ back }: OwnProps): React.ReactElement => {
  const submitHandler = (val: CreatePOSFormValues): void => {
    console.log(val)
  }

  return (
    <Container>
      <Pane width={400}>
        <Wizard<CreatePOSFormValues> onSubmit={submitHandler} initialValues={INITIAL_VALUES}>
          <BonusPoolToken />
          <SimplePOSToken />
          <CurveCoefficient />
        </Wizard>
      </Pane>
      <SBackBtn onClick={back} />
    </Container>
  )
}

export default CreatePOS
