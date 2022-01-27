import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const CountriesList = ({ countries }) => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    <ul>
                        {countries.map((country) => {
                            return (
                                <li className="country" key={country.alpha3Code}>
                                    <Link to={country.alpha3Code}>{country.name.common}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col-7">
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default CountriesList;