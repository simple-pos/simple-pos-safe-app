import React from "react"
import styled from "styled-components"
import { BackButton } from "evergreen-ui"
// import { useSafe } from "@rmeissner/safe-apps-react-sdk"

import Wizard from "../../components/forms/MultistepWizard"
import BonusPoolToken from "./BonusPoolToken"
import SimplePOSToken from "./SimplePOSToken"
import CurveCoefficient from "./CurveCoefficient"

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
  return (
    <Container>
      <Wizard>
        <BonusPoolToken></BonusPoolToken>
        <SimplePOSToken></SimplePOSToken>
        <CurveCoefficient></CurveCoefficient>
      </Wizard>
      <BackButton onClick={back} />
    </Container>
  )
}

export default CreatePOS
