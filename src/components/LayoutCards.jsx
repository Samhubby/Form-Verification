import React from "react";
import Card from "./Card";

const LayoutCards = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-2xl text-white font-bold">Layout Cards</h1>
      <Card
        src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
        country="Singapore"
        office="Head Office"
        company="XYZ Pvt. Ltd."
        description="Road to nowhere, 06-404, 500 Internal Error"
      />
      <div className="flex flex-row space-x-9">
        <Card
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
          country="HongKong"
          office="Branches"
          company="XYZ Pte. Ltd."
          description="The Infinite Loop Office, 404 Timeout Plaza"
        />
        <Card
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
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
