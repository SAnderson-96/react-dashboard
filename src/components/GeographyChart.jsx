import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../data/mockGeoFeatures";

function GeographyChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      projectionScale={isDashboard ? 40 : 150}
      borderWidth={1.5}
      borderColor="#ffffff"
      tooltip={(point) => {
        console.log(point);
        return (
          <div
            style={{
              background: point.feature.color ? point.feature.color : "#666666",
              padding: "9px 12px",
              border: "1px solid #ccc",
              color: "black",
              borderRadius: "4px",
            }}
          >
            <div>{`${
              point.feature.label ? point.feature.label : point.feature.id
            } - ${
              point.feature.formattedValue
                ? point.feature.formattedValue
                : "Unknown"
            }`}</div>
          </div>
        );
      }}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}

export default GeographyChart;
