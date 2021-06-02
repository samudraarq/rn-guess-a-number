import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://images.unsplash.com/photo-1622367708690-b760ff6bbf86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          // }}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 40,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
});
