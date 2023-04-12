import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import BackgText from "../components/BgText";
import Brem from "../images/bremner.jpg";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { Button } from "primereact/button";
import axios from "axios";

export default function FindABike(props) {
  /** PASS MYSQL DATA TO THE FE */
  const [store, setStore] = useState([]);
  /** PREVENTS THE UNDEFINED ERROR. */
  const [bikeCount, setBikeCount] = useState([20, 20, 20, 20, 20]);
  const [currentStation, setCurrentStation] = useState();
  const [tableVisible, setTableVisible] = useState("hidden");

  const seeBikesInStation = (StationID) => {
    axios
      .post("http://localhost:4000/bikeStore", {
        stationID: StationID,
      })
      .then((response) => {
        setStore(response.data);
      });
  };

  /** FETCHES DATA FROM MYSQL WHEN PAGE IS RENDERED. */
  useEffect(() => {
    const getBikeCount = async () => {
      const res = await fetch("http://localhost:4000/bikeCounting");
      const getData = await res.json();
      setBikeCount(getData);
      console.log(bikeCount);
    };
    getBikeCount();
  }, [bikeCount]);

  let nav = useNavigate();

  const bikeStations = [
    {
      ST_ID: 1,
      Address: "123 York St SW",
      Quantity: bikeCount[0].bikeCount,
      latitude: 43.64460214714695,
      longitude: -79.38682750191234,
    },
    {
      ST_ID: 2,
      Address: "678 Maple Grove SW",
      Quantity: bikeCount[1].bikeCount,
      latitude: 43.65070273636765,
      longitude: -79.40515889822396,
    },
    {
      ST_ID: 3,
      Address: "6123 North York Blvd NE",
      Quantity: bikeCount[2].bikeCount,
      latitude: 43.65049610149945,
      longitude: -79.37304304673329,
    },
    {
      ST_ID: 4,
      Address: "9213 Scarborough Ave E",
      Quantity: bikeCount[3].bikeCount,
      latitude: 43.64672213119675,
      longitude: -79.41550319421815,
    },
    {
      ST_ID: 5,
      Address: "4891 Yonge St N",
      Quantity: bikeCount[4].bikeCount,
      latitude: 43.66598220918121,
      longitude: -79.3929150753547,
    },
  ];

  return (
    <React.Fragment>
      <TopNavBar />
      <div className="bgtext">
        <BackgText
          bgimg={Brem}
          bgalt="A streeview of Bremner Blvd, Toronto"
          includeButtons={false}
          TitleText="Find your set of wheels and feel the adrenaline"
          TitleSub="Use the interactive map below to view information about each station"
        />
      </div>
      <div className="interactive-map m-5">
        <h1
          style={{
            marginTop: "65px",
            marginBottom: "40px",
            fontFamily: "Gotham Light",
            fontSize: "70px",
            color: "#0ec962",
            animation: "fadeinup 2.0s",
          }}
        >
          Find a Station Below
        </h1>
        <ReactGLMap
          initialViewState={{
            latitude: 43.6534733,
            longitude: -79.383961,
            zoom: 12.4,
          }}
          style={{
            display: "block",
            width: "70vw",
            height: "70vh",
            marginLeft: "auto",
            marginRight: "auto",
            animation: "fadein 3.0s",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoiY2FkYW1vcGkiLCJhIjoiY2xnNnhoeXY1MGhudzNmbjU0ZDMyYWV4ZCJ9.0VomXaNMrZkMyWBuoR53Og"
        >
          {bikeStations.map((station) => (
            <Marker
              key={station.ST_ID}
              latitude={station.latitude}
              longitude={station.longitude}
            >
              <Button
                severity="danger"
                icon="pi pi-map-marker"
                rounded
                style={{ width: "34px", height: "34px" }}
                tooltip={
                  "Station ID: " +
                  station.ST_ID +
                  "\n" +
                  "Address: " +
                  station.Address +
                  "\n" +
                  "Quantity: " +
                  station.Quantity +
                  "\n" +
                  "Remaining Docks: " +
                  (20 - station.Quantity)
                }
                tooltipOptions={{ position: "top" }}
                onClick={() => {
                  seeBikesInStation(station.ST_ID);
                  setCurrentStation(station.ST_ID);
                  setTableVisible("visible");
                }}
              />
            </Marker>
          ))}
        </ReactGLMap>
      </div>
      <div>
        <h1
          style={{
            marginTop: "65px",
            marginBottom: "40px",
            fontFamily: "Gotham Light",
            fontSize: "70px",
            color: "#0ec962",
            animation: "fadeinup 2.0s",
            visibility: tableVisible,
          }}
        >
          Bikes Stored in Station {currentStation}:
        </h1>
        <div>
          <table
            className="table table-bordered"
            style={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              visibility: tableVisible,
            }}
          >
            <tr>
              <th>Bike License Plate Number</th>
              <th>Rent</th>
            </tr>

            {store.map((bike) => (
              <tr key={bike.StationID}>
                <td>{bike.license_plate_no}</td>
                <td>
                  <Button
                    label="Rent this bike !"
                    style={{
                      borderRadius: "50px",
                      fontFamily: "Gotham Light",
                      fontSize: "13.5px",
                    }}
                    onClick={() => {
                      nav("/checkout");
                      window.localStorage.setItem(
                        "Bike_Rented",
                        bike.license_plate_no
                      );
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
