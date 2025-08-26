import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#EFEFEF",
      }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      
      <Image source={require("../assets/images/image1.png")}
       style={{ width: "100%", height: 200, borderRadius: 12 }}
      />
      <View style={{ width: "100%", marginTop: 16 }}>
        <Pressable
          style={{
            backgroundColor: "navy",
            padding: 12,
            borderRadius: 8,
            marginBottom: 8,
            alignSelf: "stretch",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>20% dine in discount</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#573195",
            padding: 12,
            borderRadius: 8,
            marginBottom: 8,
            alignSelf: "stretch",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>40% dine in discount</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Info</Text>
        <Text style={styles.cardText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet deserunt ullamco est sit aliqua
          dolor do amet
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>How to use</Text>
        <Text style={styles.cardText}>1. Amet minim mollit non deserunt ullamco est sit</Text>
        <Text style={styles.cardText}>2. Aliqua dolor do amet sint. Velit officia consequat</Text>
        <Text style={styles.cardText}>3. At duis enim velit mollit. Exercitation</Text>
        <Text style={styles.cardText}>4. Nesciunt sunt nostrud amet deserunt ullamco</Text>
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cardTitle}>Terms & Conditions</Text>
          <Pressable onPress={() => alert("Show more terms & conditions...")}>
            <Text style={{ color: "blue", textDecorationLine:"underline" }}>Learn more &gt;</Text>
          </Pressable>
        </View>
        <Text style={styles.cardText}>- Amet minim mollit non deserunt ullamco est sit</Text>
        <Text style={styles.cardText}>- Velit officia consequat duis enim velit mollit</Text>
        <Text style={styles.cardText}>- Exercitation veniam consequat sunt nostrud</Text>
        <Text style={styles.cardText}>- Ullamco est sit aliqua dolor do amet</Text>
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../assets/images/image2.jpg")}
            style={{ width: 50, height: 50, marginRight: 12 }}
          />
          <Text style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "navy"
          }}
          >Super Chevrolet Service</Text>
        </View>
      </View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
});