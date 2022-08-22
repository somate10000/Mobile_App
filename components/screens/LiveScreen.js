import {
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";

const LOCATIONS = [
  {
    id: 0,
    location: "Australia",
    flight: "Royal Air Maroc",
    accomodation: "Brunswick Hotel",
    tours: "2 mini tours",
    items: "Two items Packed",
    percent_completed: "10% completed",
    img: require("../../assets/location1.png"),
  },
  {
    id: 1,
    location: "Paris",
    flight: "Emirate",
    accomodation: "Air BnB",
    tours: "2 mini tours",
    items: "15 items Packed",
    percent_completed: "90% completed",
    img: require("../../assets/location2.png"),
  },
  {
    id: 2,
    location: "Seychelles",
    flight: "Qatar Airways",
    accomodation: "Bayview Seychelles",
    tours: "Sun bathing & Scuba....",
    items: "All items Packed",
    percent_completed: "Done",
    img: require("../../assets/location3.png"),
  },
];

const LiveScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "poppins",
            color: "rgba(5, 68, 94, 1)",
          }}
        >
          Saved Trip Plans
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        {LOCATIONS.map((places, index) => {
          return (
            <View key={index} style={styles.places_container}>
              <Image source={places.img} style={styles.places_img} />
              <View>
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "500",
                    fontSize: 16,
                    color: "white",
                    marginBottom: 10,
                  }}
                >
                  {places.location}
                </Text>
                <View style={styles.places_text_container}>
                  <View style={styles.places_text_circle} />
                  <Text style={styles.places_text}>{places.flight}</Text>
                </View>
                <View style={styles.places_text_container}>
                  <View style={styles.places_text_circle} />
                  <Text style={styles.places_text}>{places.accomodation}</Text>
                </View>
                <View style={styles.places_text_container}>
                  <View style={styles.places_text_circle} />
                  <Text style={styles.places_text}>{places.tours}</Text>
                </View>
                <View style={styles.places_text_container}>
                  <View style={styles.places_text_circle} />
                  <Text style={styles.places_text}>{places.items}</Text>
                </View>
              </View>
              <View style={{ height: 80, alignItems: "center" }}>
                <Image source={require("../../assets/heart.png")} />
                <Text
                  style={{
                    fontFamily: "poppins",
                    fontSize: 8,
                    color: "white",
                    marginTop: 70,
                  }}
                >
                  {places.percent_completed}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 0,
    paddingHorizontal: 25,
  },
  places_container: {
    backgroundColor: "rgba(24, 154, 180, 1)",
    marginBottom: 35,
    height: 156,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  places_img: {
    width: 126,
    height: 118,
    marginRight: 15,
    borderRadius: 5,
  },
  places_text_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  places_text_circle: {
    backgroundColor: "white",
    height: 3,
    width: 3,
    marginRight: 2,
    borderRadius: 3,
  },
  places_text: {
    fontFamily: "poppins",
    fontSize: 12,
    color: "white",
  },
});

export default LiveScreen;
