import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

function Time(props) {
  if (props.brk >= 0) {
    return (
      <Text style={styles.timerText}>
        {props.duration.minutes()}:{props.duration.seconds()}
      </Text>
    );
  } else {
    return <Text style={styles.timerText}>You Made It!!</Text>;
  }
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 60,
  },
});

export default Time;
