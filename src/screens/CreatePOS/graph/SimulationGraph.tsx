import React from "react"
import { XAxis, YAxis, CartesianGrid, LineChart, Line, Legend } from "recharts"
import { GraphPoint } from "./calculations"

type Props = {
  data: GraphPoint[]
  dataKey: keyof GraphPoint
}

const SimulationGraph = ({ data, dataKey }: Props): React.ReactElement => {
  return (
    <LineChart
      width={500}
      height={150}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="payment" interval={99} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Legend />
      <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
    </LineChart>
  )
}

export default SimulationGraph
