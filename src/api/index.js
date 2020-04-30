// Use the page to do any API calls & Data Manipulation

import axios from 'axios'

const url = 'https://covidapi.info/api/v1'

// Latest Global Count
export const fetchGlobalStats = async () => {
    try {
        const {data : {date, result}} = await axios.get(`${url}/global`);
        return {date, result} // TODO : Consider whether there is a need to destructure
    }
    catch (error){
        return error
    }
}

//Datewise count of worldwide cases
export const globalTimeseries = async () => {
    try {
        const {data} = await axios.get(`${url}/global/count`);
        const formattedData = Object.entries(data.result).map(([key, value]) => ({...value, date: key})) // Moves the date from the index to inside the object
        return {formattedData} 
    }
    catch (error){
        return error
    }
}

// Global data,broken down by each country in between the data range (Extrememly hard to use/render)
export const globalBreakdown = async (startDate, endDate) => {
    try {
    const {data : {count, result}} = await axios.get(`${url}/global/timeseries/${startDate}/${endDate}`)
    return {count, result}
    }
    catch (error) {
        return error;
    }
}

// Individual counties timeseries data
export const countryBreakdown = async (country, startDate, endDate) => {

    try {
        const {data : { count, result}} = await axios.get(`${url}/country/${country}/timeseries/${startDate}/${endDate}`)
        return {count, result, isError : false}
    }
    catch (error) {
        const errorData = { count :0, result : [], isError : true};
        return errorData
    }
}

// Get the latest data for each country
export const countryLatest = async () => {
    try {
        const {data} = await axios.get(`${url}/global/latest`)
        return data
    }
    catch (error) {
        return error
    }
}