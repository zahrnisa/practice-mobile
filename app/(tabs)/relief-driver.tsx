import { View, Text, StyleSheet } from "react-native";

export default function ReliefDriverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah page Relief Driver</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e40af",
  },
});