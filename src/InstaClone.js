import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import config from "./config";

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get("window").width
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     screenWidth: Dimensions.get("window").width;
  //   })
  // }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/xebFlcf0oFkqoOs5FY7i3Q1IUpj7yIdQck7JjKSaDFFDtvbB7jvznnSbXfNCaOYETuHr8-yyAjSYv600LjrriW1JKQ" +
      "=s" +
      imageHeight +
      "-c";
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/J1szq6uqLZKwUVDQy8WpF9Gx-3f1lkt9-kYVLqNZftaQg0WD0P78y2BHaXmGwfXHNXB0cGeN6upIVN83YgWV53_NNA"
              }}
            />
            <Text style={{ marginHorizontal: 10 }}>william.scholl</Text>
          </View>
          <View
            style={{
              alignContent: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 25 }}>...</Text>
          </View>
        </View>
        <Image
          style={{ width: this.state.screenWidth, height: 415 }}
          source={{
            uri:
              "https://lh3.googleusercontent.com/xebFlcf0oFkqoOs5FY7i3Q1IUpj7yIdQck7JjKSaDFFDtvbB7jvznnSbXfNCaOYETuHr8-yyAjSYv600LjrriW1JKQ"
          }}
        />
        <View style={styles.iconBar}>
          <Image style={styles.icon} src={config.images.heartIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 80,
    marginTop: 25,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: row
  }
});

export default InstaClone;
