import React from "react"
import ReactDOM from "react-dom"
import SafeProvider from "@rmeissner/safe-apps-react-sdk"

import GlobalStyle from "./GlobalStyle"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SafeProvider loading={<p>Loading...</p>}>
      <App />
    </SafeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
