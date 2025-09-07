import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function JobsTripsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Ionicons style={styles.icon} name="car-outline"  size={22} color={"navy"} />
          <Text style={styles.headerText}>Jobs / Trips</Text>
      </View>
      <View style={styles.card}>
        <Image
        source={require("../../assets/images/under-construction.png")}
        style={styles.emptyLogo} resizeMode="contain"
        />
        <Text style={styles.text}>Page Under Construction!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "navy",
  },
  icon: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 220,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
  },
  emptyLogo: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    marginTop: 10
  }, 
});
