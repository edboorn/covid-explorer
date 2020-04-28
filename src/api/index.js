// Use the page to do any API calls & Data Manipulation

import axios from 'axios'

const url = 'https://covidapi.info/api/v1'

export const fetchGlobalStats = async () => {
    try {
        const {data : {date, result}} = await axios.get(`${url}/global`);
        return {date, result} // TODO : Consider whether there is a need to restructure
    }
    catch (error){
        return error
    }
}

export const globalBreakdown = async (startDate, endDate) => {
    try {
    const {data : {count, result}} = await axios.get(`${url}/global/timeseries/${startDate}/${endDate}`)
    return {count, result}
    }
    catch (error) {
        return error;
    }
}


export const countryBreakdown = async (country, startDate, endDate) => {

    try {
        const {data : { count, result}} = await axios.get(`${url}/country/${country}/timeseries/${startDate}/${endDate}`)
        return {count, result}
    }
    catch (error) {
        return error;
    }
}

