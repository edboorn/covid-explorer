/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
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

const globalGraph = ({ countryTitle,graphData }) => {

  return (
      <div className="charts">
      <h5>{countryTitle}</h5>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={graphData}>
          <Line
            strokeWidth={1}
            type="monotone"
            dataKey="confirmed"
            stroke="#8884d8"
          />
          <Line
            strokeWidth={1}
            type="monotone"
            dataKey="deaths"
            stroke="#FF2D00"
          />
          <Line
            strokeWidth={1}
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

export default globalGraph;
