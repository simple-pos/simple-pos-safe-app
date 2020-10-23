import React from "react"
import { useStack } from "./hooks/useStack"
import Welcome from "./screens/Welcome"
import CreatePOS from "./screens/CreatePOS"
import { AppScreens } from "./types"

const App = (): React.ReactElement => {
  const [screen, { push, pop }] = useStack<AppScreens>(["welcome"])

  return (
    <div>
      <>
        {screen === "welcome" && <Welcome push={push} />}
        {screen === "create-form" && <CreatePOS back={pop} />}
      </>
    </div>
  )
}

export default App
