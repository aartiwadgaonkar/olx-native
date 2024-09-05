import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const Splash1 = ({ navigation }) => {
  return (
    <View style={styles.center}>
      {Platform.OS === "android" ? <>
        <LottieView
          style={{height:400,width:400}}
          autoPlay
          source={require("./../assets/Animation2.json")}
        />
        <View>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
        </View>
        </>
      : 
        <></>
     }
      <Text>Splash1</Text>
      <Button
        onPress={(e) => navigation.navigate("Splash2")}
        style={{ position: "absolute", bottom: 70, right: 10 }}
        mode="contained-tonal"
      >
        Next
      </Button>
    </View>
  );
};

export default Splash1;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
});
