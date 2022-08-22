import {
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const account_settings = [
  {
    id: 0,
    name: "Profile",
    desc: "Manage Changes to your account",
    img: require("../../assets/profile.png"),
  },
  {
    id: 1,
    name: "Cards",
    desc: "Secure your cards for safety",
    img: require("../../assets/cards.png"),
  },
  {
    id: 2,
    name: "Preferences",
    desc: "Customize your app",
    img: require("../../assets/settings.png"),
  },
  {
    id: 3,
    name: "Logout",
    desc: "Logout from your acccount",
    img: require("../../assets/exit.png"),
  },
];

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile_container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/picture.png")}
            style={styles.img}
          />
          <View style={{ marginLeft: 30 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "poppins",
                color: "white",
              }}
            >
              Olivia Scott
            </Text>
            <Text
              style={{ fontFamily: "poppins", color: "white", fontSize: 12 }}
            >
              UI/UX Designer
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.imgII}
        />
      </View>

      <View style={{ marginTop: 76, paddingHorizontal: 17 }}>
        {account_settings.map((settings, index) => {
          return (
            <View key={index}>
              <View style={{ flexDirection: "row", marginBottom: 30 }}>
                <Image source={settings.img} style={styles.imgIII} />
                <View
                  style={{ width: "90%", marginLeft: 10, paddingRight: 20 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "poppins",
                          color: "#189AB4",
                          fontWeight: "700",
                        }}
                      >
                        {settings.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins",
                          color: "#189AB4",
                          fontSize: 12,
                          marginTop: 8,
                        }}
                      >
                        {settings.desc}
                      </Text>
                    </View>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={20}
                      color={"#189AB4"}
                    />
                  </View>
                  <View
                    style={{
                      height: 1,
                      width: "100%",
                      marginTop: 14,
                      backgroundColor: "rgba(24, 154, 180, 0.5)",
                    }}
                  />
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
  profile_container: {
    backgroundColor: "#189AB4",
    height: 85,
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  img: {
    height: 68,
    width: 68,
  },
  imgII: {
    height: 20,
    width: 20,
  },
  imgIII: {
    height: 25,
    width: 25,
  },
});

export default Settings;
