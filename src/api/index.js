// Use the page to do any API calls & Data Manipulation

import axios from 'axios'

const url = 'https://covidapi.info/api/v1'

// Global Totaled Stats
export const fetchGlobalStats = async () => {
    try {
        const {data : {date, result}} = await axios.get(`${url}/global`);
        return {date, result} // TODO : Consider whether there is a need to destructure
    }
    catch (error){
        return error
    }
}

//Time Series of Global Data
export const globalTimeseries = async () => {
    try {
        const {data : {count, result}} = await axios.get(`${url}/global/count`);
        return {count, result} 
    }
    catch (error){
        return error
    }
}

//Time Series of Each Countries Data
export const globalBreakdown = async (startDate, endDate) => {
    try {
    const {data : {count, result}} = await axios.get(`${url}/global/timeseries/${startDate}/${endDate}`)
    return {count, result}
    }
    catch (error) {
        return error;
    }
}

// Time Series of Each countries Data
export const countryBreakdown = async (country, startDate, endDate) => {

    try {
        const {data : { count, result}} = await axios.get(`${url}/country/${country}/timeseries/${startDate}/${endDate}`)
        return {count, result}
    }
    catch (error) {
        return error;
    }
}

