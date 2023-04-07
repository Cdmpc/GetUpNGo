import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import BackgText from "../components/BgText";
import Brem from "../images/bremner.jpg";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { Button } from "primereact/button";

/** We will have to dynamically change the Quantity property as it interacts with the DB. */
const bikeStations = [
  {
    ST_ID: 1,
    Address: "123 York St SW",
    Quantity: 5,
    latitude: 43.64460214714695,
    longitude: -79.38682750191234,
  },
  {
    ST_ID: 2,
    Address: "678 Maple Grove SW",
    Quantity: 4,
    latitude: 43.65070273636765,
    longitude: -79.40515889822396,
  },
  {
    ST_ID: 3,
    Address: "6123 North York Blvd NE",
    Quantity: 6,
    latitude: 43.65049610149945,
    longitude: -79.37304304673329,
  },
  {
    ST_ID: 4,
    Address: "9213 Scarborough Ave E",
    Quantity: 7,
    latitude: 43.64672213119675,
    longitude: -79.41550319421815,
  },
  {
    ST_ID: 5,
    Address: "4891 Yonge St N",
    Quantity: 3,
    latitude: 43.66598220918121,
    longitude: -79.3929150753547,
  },
];

export default function FindABike() {
  let nav = useNavigate();
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
        <h1 style={{ marginBottom: "40px" }}>Find a Station Below</h1>
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
              />
            </Marker>
          ))}
        </ReactGLMap>
      </div>
    </React.Fragment>
  );
}
