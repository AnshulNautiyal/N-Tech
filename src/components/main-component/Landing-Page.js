import React from "react";
import { Detail } from "./../common-components/Detail";
import { Image } from "./../common-components/Image";


export const Landing = props => {

  const { detailData = "", fileName = "", extraContent ="" } = props;
  return (
    <>
      <Detail {...detailData} extraContent={extraContent} />
      <Image fileName={fileName} />
    </>
  );
};
