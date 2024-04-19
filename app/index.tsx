import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

function Page() {
  return (
    <View style={styles.container}>
      <Text>[Pages]</Text>
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/device-list">Device List</Link>
      <Link href="/account">Account</Link>
      <Link href="/graph">Graph</Link>
      <Link href="/messaging">Messaging</Link>
      <Link href="/search-list">Search List</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
});

export default Page;
