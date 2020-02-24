import React, { useState, useEffect } from "react";
//import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
        console.log('Here are the colors from BubblePage', res.data);
        setColorList(res.data);
    })
    .catch(err => console.log('Did not get list of colors from BubblePage', err))

}, [setColorList]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
