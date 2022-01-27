import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetails = (props) => {
    const location = useLocation();
    const params = useParams();

    console.log("location", location);
    console.log("params", params);

    const myCountry = props.countries.find(
        (country) => country.alpha3Code === params.alpha3Code
    );
    console.log(myCountry);
    return (
        <div>
            <pre>{JSON.stringify(params, null, 2)}</pre>
            <h1>{myCountry.name.common}</h1>

            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + myCountry.alpha2Code.toLowerCase() + ".png"} alt={myCountry.name.common} />

            <pre>{JSON.stringify(location, null, 2)}</pre>
        </div>
    );
};

export default CountryDetails;
