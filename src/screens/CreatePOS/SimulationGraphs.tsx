import React from "react"
import { XAxis, YAxis, CartesianGrid, LineChart, Line, Legend } from "recharts"
import { GraphPoint } from "./utils/calculations"

type Props = {
  data: GraphPoint[]
}

const SimulationGraph = ({ data }: Props): React.ReactElement => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Legend />
      <Line type="monotone" dataKey="pool" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="price" stroke="#82ca9d" />
      <Line type="monotone" dataKey="tokens" stroke="#413f2d" />
    </LineChart>
  )
}

export default SimulationGraph
