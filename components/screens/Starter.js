import {
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Starter = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.ImageBackground}
      >
        <View style={styles.cover}>
          <Image source={require("../../assets/picture.png")} />
          <Text
            style={{
              fontSize: 25,
              fontFamily: "poppins",
              fontWeight: "700",
              marginTop: 20,
              color: "rgba(5, 68, 94, 1)",
            }}
          >
            Welcome
          </Text>
          <Text style={[styles.text, { marginTop: 10 }]}>
            Your new destination awaits you
          </Text>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View style={{ marginHorizontal: 20 }}>
              <View style={styles.box}>
                <Image source={require("../../assets/1.png")} />
              </View>
              <Text style={[styles.text, { width: 90, marginLeft: 10 }]}>
                Create new Trip plan
              </Text>
            </View>
            <View style={{ marginHorizontal: 20, justifyContent: "center" }}>
              <TouchableOpacity onPress={() => navigation.navigate("App")}>
                <View style={styles.box}>
                  <Image source={require("../../assets/2.png")} />
                </View>
              </TouchableOpacity>
              <Text style={[styles.text, { width: 90 }]}>
                continue on a previous plan
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Starter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
  },
  text: { color: "rgba(5, 68, 94, 1)", fontFamily: "poppins", fontSize: 12 },
  cover: {
    height: "100%",
    width: "100%",
    paddingTop: "40%",
    alignItems: "center",
  },
  box: {
    height: 90,
    width: 90,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#189AB4",
  },
});
