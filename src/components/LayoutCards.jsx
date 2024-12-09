import React from "react";
import Card from "./Card";
import HK from "../logos/HK.svg";
import SP from "../logos/SP.svg";
import USA from "../logos/USA.svg";

const LayoutCards = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-3xl text-white font-bold">Layout Cards</h1>
      <Card
        src={SP}
        country="Singapore"
        office="Head Office"
        company="XYZ Pvt. Ltd."
        description="Road to nowhere, 06-404, 500 Internal Error"
      />
      <div className="flex flex-row space-x-9">
        <Card
          src={HK}
          country="HongKong"
          office="Branches"
          company="XYZ Pte. Ltd."
          description="The Infinite Loop Office, 404 Timeout Plaza"
        />
        <Card
          src={USA}
          country="USA"
          office="Branches"
          company="XYZ Inc."
          description="Nulltown, Buglandia, 500 0xDEADBEE"
        />
      </div>
    </div>
  );
};

export default LayoutCards;
