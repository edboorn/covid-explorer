import React from 'react'

import StatsData from './stats-data/stats-data';
// Component That renders the data from each country
import GlobalGraphs from './global-breakdown/global-counts'
import GlobalTimeSeries from './global-timeseries/global-timeseries'
export default function home () {
    return (
        <div>
            <StatsData/>
            {/* <GlobalGraphs/> */}
            <GlobalTimeSeries />
        </div>
    )
}