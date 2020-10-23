import React from "react"
import styled from "styled-components"
import { Button } from "evergreen-ui"
import { AppScreens } from "../types"

type Props = {
  push: (screen: AppScreens) => void
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Welcome = ({ push }: Props): React.ReactElement => {
  return (
    <Container>
      <Button appearance="primary" onClick={() => push("create-form")}>
        Create a POS
      </Button>
      <Button onClick={() => push("create-form")} marginTop={8}>
        Manage POS
      </Button>
    </Container>
  )
}

export default Welcome
