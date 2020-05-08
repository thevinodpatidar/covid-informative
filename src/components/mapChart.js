import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const INDIA_TOPOJSON = require("./IND_adm1.json");
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
        <hr></hr>
        <h3 className="is-uppercase has-text-centered has-text-weight-bold">World Statistics</h3>
      <ComposableMap data-tip="" projection="geoMercator" projectionConfig={{ scale: 800, center: [78.9629, 22.5937] }}>
        {/* <ZoomableGroup> */}
          <Geographies geography={INDIA_TOPOJSON}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME_1 } = geo.properties;
                    setTooltipContent(`${NAME_1}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
