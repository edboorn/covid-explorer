import React from "react";

const globalStats = ({ date, confirmed, recovered, deaths }) => {
  //Refactor this to be a global helper function
  const numberFormatter = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  let formattedConfirmed = numberFormatter(confirmed);
  let formattedRecovered = numberFormatter(recovered);
  let formattedDeaths = numberFormatter(deaths);
  return (
    <div>
      <h3> As of {date}, how is the world doing? </h3>
      <p>
        There are currently <b>{formattedConfirmed}</b> cases, <b>{formattedRecovered} </b>
        recovieries and <b>{formattedDeaths}</b> confirmed deaths
      </p>
    </div>
  );
};

export default globalStats;
