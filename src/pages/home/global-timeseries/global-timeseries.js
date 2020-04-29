/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react'
import {globalTimeseries} from '../../../api/index'

import TimeSeriesGraph from './global-timeseries-graph'
const globaltimeseries = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            setData(await globalTimeseries());
        }
        fetchApi();
    }, [])
    if (data === undefined || data.length === 0){
        return <p> Data Loading </p>
    } else {
    return (
        <div>
            <TimeSeriesGraph graphData={data}/>
        </div>
    )
    }
}

export default globaltimeseries;