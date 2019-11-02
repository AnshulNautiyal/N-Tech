import React from "react";
import { Detail } from "./../common-components/Detail";
import { Image } from "./../common-components/Image";


export const Landing = props => {

  const { detailData = "" } = props;
  return (
    <>
      <Detail {...detailData} />
      <Image fileName="work" />
    </>
  );
};
