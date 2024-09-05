import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const Splash2 = ({ navigation }) => {
  return (
    <View style={styles.center}>
        {Platform.OS === "android" ? <>
        <LottieView
          style={{height:400,width:400}}
          autoPlay
          source={require("./../assets/Animation1.json")}
        />
        <View>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
        </View>
        </>
      : 
        <></>
     }
      <Button
        onPress={(e) => navigation.navigate("Splash1")}
        style={{ position: "absolute", bottom: 70, left: 10 }}
        mode="contained-tonal"
      >
       Prev
      </Button>
      <Button
        onPress={(e) => navigation.navigate("Splash3")}
        style={{ position: "absolute", bottom: 70, right: 10 }}
        mode="contained-tonal"
      >
        Next
      </Button>
     
    </View>
  );
};

export default Splash2;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
});
