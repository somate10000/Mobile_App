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
import { FontAwesome, Ionicons, EvilIcons, Feather } from "@expo/vector-icons";

const notiy = [
  {
    id: 0,
    name: "Flight",
    nameColor: "white",

    desc: "The flight to Morocco is cheaper now.",
    descII: "Check Emirates and Air Maroc",
    book: "Book Now",
    bgColor: "rgba(24, 154, 180, 1)",
    bookColor: "white",
    img: require("../../assets/airplane.png"),
  },
  {
    id: 1,
    name: "Pack Help",
    nameColor: "rgba(5, 68, 94, 1)",
    comment: "well done!",
    desc: "You have packed 15 items for you Seychelles Trip, You have 10 more items to pack",
    book: "Pack Now",
    bgColor: "rgba(212, 241, 244, 1)",
    bookColor: "rgba(24, 154, 180, 1)",
    img: require("../../assets/wheel-box.png"),
  },
  {
    id: 2,
    name: "Weather",
    nameColor: "white",
    desc: "Have you checked the weather in seychelles for your planned trip?",
    descII: "",
    book: "Check Now",
    bgColor: "rgba(24, 154, 180, 1)",
    bookColor: "white",
    img: require("../../assets/weather.png"),
  },
  {
    id: 3,
    name: "Short Stay",
    nameColor: "rgba(5, 68, 94, 1)",
    comment: "well done!",
    desc: "You have packed 15 items for you Seychelles Trip, You have 10 more items to pack",
    book: "Pack Now",
    bgColor: "rgba(212, 241, 244, 1)",
    bookColor: "rgba(24, 154, 180, 1)",
    img: require("../../assets/airplane.png"),
  },
];

const ProfileScreen = () => {
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
          Notifications
        </Text>
      </View>
      <View>
        {notiy.map((noti, index) => {
          return (
            <View
              key={index}
              style={[
                styles.places_container,
                { backgroundColor: noti.bgColor },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      fontWeight: "700",
                      fontSize: 16,
                      color: noti.nameColor,
                      marginBottom: 10,
                      marginRight: 8,
                    }}
                  >
                    {noti.name}
                  </Text>
                  <Image source={noti.img} style={styles.img} />
                </View>
                <EvilIcons name="close" color={noti.bookColor} size={20} />
              </View>
              <View style={{ height: 60 }}>
                <Text style={[styles.book_text, { color: noti.bookColor }]}>
                  {noti.comment}
                </Text>
                <Text style={[styles.book_text, { color: noti.bookColor }]}>
                  {noti.desc}
                </Text>
                <Text style={[styles.book_text, { color: noti.bookColor }]}>
                  {noti.descII}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 68,
                    height: 19,
                    borderRadius: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: noti.bookColor,
                  }}
                >
                  <Text style={{ color: noti.bgColor, fontSize: 12 }}>
                    {noti.book}
                  </Text>
                </View>
                <View
                  style={{
                    width: 68,
                    height: 19,
                    borderRadius: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    marginLeft: 10,
                    borderColor: noti.bookColor,
                  }}
                >
                  <Text style={{ color: noti.bookColor, fontSize: 12 }}>
                    Later
                  </Text>
                </View>
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
    marginBottom: 14,
    height: 137,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  img: {
    height: 25,
    width: 25,
  },
  book_text: {
    fontFamily: "poppins",
    fontSize: 12,
  },
});

export default ProfileScreen;
