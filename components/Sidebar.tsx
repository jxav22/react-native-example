import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.buttonsContainer}>
          <Link href="/account">
            <View>
              <Image
                source={require("../assets/images/buttons/User.png")}
                style={styles.imageButton}
              />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </Link>
          <Link href="/home">
            <Image
              source={require("../assets/images/buttons/Home.png")}
              style={styles.imageButton}
            />
          </Link>
          <Link href="/messaging">
            <Image
              source={require("../assets/images/buttons/Message.png")}
              style={styles.imageButton}
            />
          </Link>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.contentsContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    gap: 15,
  },
  logoutText: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
    color: "#D06868",
  },
  sidebarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    gap: 20,
  },
  contentsContainer: {
    flex: 1,
  },
  divider: {
    width: 2,
    height: 280,
    backgroundColor: "#000",
  },
  logo: {
    maxWidth: 80,
    maxHeight: 70,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
});

export default Sidebar;
