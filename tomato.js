import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import tomato1 from "./assets/tomato-raww.png";
import tomato2 from "./assets/tomato-raw.png";
import tomato3 from "./assets/tomato-medium.png";
import tomato4 from "./assets/tomato-ripe.png";
import tomato5 from "./assets/tomato-ripee.png";
import tomato6 from "./assets/tomato-final.png";

function Tomato(props) {
  if (props.st > 30) {
    return <Image source={tomato6} style={{ width: 300, height: 300 }} />;
  } else if (props.st > 250) {
    return <Image source={tomato5} style={{ width: 300, height: 300 }} />;
  }
  if (props.st > 20) {
    return <Image source={tomato4} style={{ width: 300, height: 300 }} />;
  }
  if (props.st > 15) {
    return <Image source={tomato3} style={{ width: 300, height: 300 }} />;
  }
  if (props.st > 10) {
    return <Image source={tomato2} style={{ width: 300, height: 300 }} />;
  } else {
    return <Image source={tomato1} style={{ width: 300, height: 300 }} />;
  }
}

export default Tomato;
