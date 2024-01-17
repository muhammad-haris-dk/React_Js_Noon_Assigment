import React from "react";
import { Cards_Second_Component } from "./Cards_Second_Component";
import { Grid } from "@mui/material";

const card_Details = [
  {
    img_url:
      "https://f.nooncdn.com/p/pnsku/N53398633A/45/_/1704184673/7060c16d-bcd3-4275-9431-3fef8b1a5a01.jpg?format=avif&width=240",
    rating: "4.6",
    views: "(3.8K)",
    title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G",
    aed: "AED",
    dis_Price: "4,849",
    org_Price: "5,099",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&width=240",
    rating: "4.5",
    views: "(7.7K)",
    title: "Sony PlayStation 5 Console (Disc Version) With ",
    aed: "AED",
    dis_Price: "1,877",
    org_Price: "3,999",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1659335490/N53338272A_1.jpg?format=avif&width=240",
    rating: "3.1",
    views: "(11.5K)",
    title: "T500 Bluetooth Full Touch Call SmartWatch With ",
    aed: "AED",
    dis_Price: "19.50",
    org_Price: "89",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&width=240",
    rating: "3.6",
    views: "(6.3K)",
    title: "KIKO MILANGO Unlimited Double Touch Liquid Lip",
    aed: "AED",
    dis_Price: "59.45",
    org_Price: "69",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1665392506/N53356366A_1.jpg?format=avif&width=240",
    rating: "4.6",
    views: "(2.3K)",
    title: "Apple iPhone 11 White 128GB 4G LTE (2020)",
    aed: "AED",
    dis_Price: "1,949",
    org_Price: "2,709",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1671548521/N19200514A_1.jpg?format=avif&width=240",
    rating: "4.4",
    views: "(626)",
    title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G",
    aed: "AED",
    dis_Price: "4,849",
    org_Price: "5,099",
  },
];
const Section_06_Component = () => {
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>Trending deals in TV & accessories</h1>
      <Grid container sx={{ marginTop: "20px" }}>
        {card_Details.map((current_Obj, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={2}>
              <Cards_Second_Component
                img_url={current_Obj.img_url}
                rating={current_Obj.rating}
                views={current_Obj.views}
                title={current_Obj.title}
                aed={current_Obj.aed}
                dis_Price={current_Obj.dis_Price}
                org_Price={current_Obj.org_Price}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { Section_06_Component };
