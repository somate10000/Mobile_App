import {
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { HEIGHT, WIDTH } = Dimensions.get("screen");

const CATEGORIES = [
  {
    id: 0,
    name: "Itinerary",
    img: require("../../assets/tasklist.png"),
  },
  {
    id: 1,
    name: "Flights",
    img: require("../../assets/airplane.png"),
  },
  {
    id: 2,
    name: "Pack Help",
    img: require("../../assets/wheel-box.png"),
  },
  {
    id: 3,
    name: "Leisure",
    img: require("../../assets/picnic.png"),
  },
  {
    id: 4,
    name: "Short Stay",
    img: require("../../assets/hotel.png"),
  },
  {
    id: 5,
    name: "Map",
    img: require("../../assets/map.png"),
  },
  {
    id: 6,
    name: "Resturants",
    img: require("../../assets/serving.png"),
  },
  {
    id: 4,
    name: "Drinks",
    img: require("../../assets/tasklist.png"),
  },
  {
    id: 5,
    name: "Weather",
    img: require("../../assets/weather.png"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 669, paddingHorizontal: 30 }}>
        <View
          style={{
            marginLeft: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "poppins",
              color: "rgba(5, 68, 94, 1)",
            }}
          >
            Hi Olivia
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../../assets/picture.png")}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "rgba(5, 68, 94, 1)",
            fontFamily: "poppins",
            marginLeft: 5,
          }}
        >
          All you need for your new trip right here
        </Text>
        <View style={styles.Cato}>
          {CATEGORIES.map((Cato, index) => {
            return (
              <View
                key={index}
                style={{ alignItems: "center", marginVertical: 20 }}
              >
                <View style={styles.box}>
                  <Image source={Cato.img} />
                </View>
                <Text
                  style={{ color: "rgba(5, 68, 94, 1)", fontFamily: "poppins" }}
                >
                  {Cato.name}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles.planner}>
          <Text style={{ color: "white", fontFamily: "poppins" }}>
            Expenses Planner
          </Text>
          <Image
            source={require("../../assets/money.png")}
            style={styles.img}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 60 : 0,
  },
  img: {
    height: 40,
    width: 42,
  },
  Cato: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
  box: {
    width: 78,
    height: 79,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    backgroundColor: "rgba(24, 154, 180, 1)",
  },
  planner: {
    width: 335,
    height: 78,
    marginLeft: 7,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(24, 154, 180, 1)",
  },
});

export default HomeScreen;
