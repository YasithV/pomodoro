import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

class Btn1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text style={styles.buttontext}>{this.props.butt}</Text>;
  }
}

const styles = StyleSheet.create({
  buttontext: {
    padding: 20,
    fontSize: 20,
    color: "#000",
  },
});

export default Btn1;
