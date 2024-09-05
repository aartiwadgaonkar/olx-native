import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const Splash3 = ({ navigation }) => {
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
        onPress={(e) => navigation.navigate("Splash2")}
        style={{ position: "absolute", bottom: 70 ,left: 10}}
        mode="contained-tonal"
      >
        Prev
      </Button>
      <Button
        onPress={(e) => navigation.navigate("Auth")}
        style={{ position: "absolute", bottom: 70, right: 10 }}
        mode="contained-tonal"
      >
        Start
      </Button>
     
    </View>
  );
};

export default Splash3;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
});
