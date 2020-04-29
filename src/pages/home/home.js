import React from 'react'

import StatsData from './stats-data/stats-data';
import GlobalTimeSeries from './global-timeseries/global-timeseries'
export default function home () {
    return (
        <div>
            <StatsData/>
            <GlobalTimeSeries />
        </div>
    )
}