import React from "react"
import ReactDOM from "react-dom"
import SafeProvider from "@gnosis.pm/safe-apps-react-sdk"

import GlobalStyle from "./GlobalStyle"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SafeProvider loader={<p>Loading...</p>}>
      <App />
    </SafeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
