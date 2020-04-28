/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {fetchGlobalStats} from '../../../api/index'


const StatsData = ({ handleStatsChange }) => {
  const [stats, setStats] = useState([])
  
  useEffect(() => {
    const fetchAPI = async () => {
      setStats(await fetchGlobalStats());
    };

    fetchAPI();
  }, []);

  return (
      <div>
         <p>Will be the count component -  Check the console for flowing data </p>
      </div>
  )
}

export default StatsData