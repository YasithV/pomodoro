import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Moment, { duration } from "moment";
import Tomato from "./tomato.js";
import Time from "./time.js";
import Btn1 from "./button1.js";

class Timer extends React.Component {
  but = "Start Working";
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      btn: 0,
    };
  }

  render() {
    const { count } = this.state;
    const duration = Moment.duration(this.props.interval - count, "s");
    return (
      <View style={styles.container}>
        <Tomato st={count} />
        <Time
          duration={duration}
          brk={this.props.interval - this.state.count}
        />
        <TouchableOpacity
          onPress={() => {
            if (this.state.btn === 0) {
              this.myInterval = setInterval(() => {
                this.setState((prevState) => ({
                  count: prevState.count + 1,
                }));
              }, 1000);
              this.state.btn = 1;
              this.but = "Stop";
            } else {
              console.log("reached else");
            }
          }}
          style={styles.button}
        >
          <Btn1 butt={this.but} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: -20,
    paddingTop: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#eee",
    marginTop: 20,
    borderRadius: 20,
  },
});

export default Timer;
