import React from "react";

import settings from "./assets/settings.png";
import notes from "./assets/notes.png";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function TopIcons(props) {
  console.log(props);
  var src = props.name === "settings" ? settings : notes;
  return (
    <View>
      <Image style={styles.topicons} source={src} />
    </View>
  );
}
const styles = StyleSheet.create({
  topicons: {
    width: 30,
    height: 30,
    margin: 30,
    marginTop: 50,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
});
export default TopIcons;
