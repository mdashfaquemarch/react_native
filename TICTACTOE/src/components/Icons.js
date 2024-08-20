import React from "react";

import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from '@expo/vector-icons/EvilIcons';

function Icons({ name }) {
  switch (name) {
    case "circle":
      return <Entypo name="circle" size={38} color="#06D001" />;

    case "cross":
      return <Entypo name="cross" size={38} color="#F5004F" />;

    default:
        return <EvilIcons name="pencil" size={24} color="#B5C0D0" />
     
  }
}

export default Icons;
