import React from 'react'

import StatsData from './stats-data/stats-data';
import GlobalGraphs from './global-data/global-counts'
export default function home () {
    return (
        <div>
            <StatsData/>
            <GlobalGraphs/>
        </div>
    )
}