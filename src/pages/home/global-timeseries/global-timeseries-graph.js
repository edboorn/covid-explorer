import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const globaltimeseriesgraph = (graphData) => {
    console.log(graphData)
  return (
    <div>
        <p> Data Points : {graphData.graphData.count}</p>
      <ResponsiveContainer width="95%" height={700}>
        <LineChart data={graphData.graphData}>
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="confirmed"
            stroke="#8884d8"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="deaths"
            stroke="#FF2D00"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="recovered"
            stroke="#27FF00"
          />
          <XAxis dataKey="date" />
          <Legend />
          <Tooltip />
          <CartesianGrid />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default globaltimeseriesgraph;
