import { View, Text, StyleSheet, Image, Pressable, Alert, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.avatarWrapper}>
        <Image source={require("../assets/images/profile-picture.png")} style={styles.avatar}/>
      </View>

      {/* Profile Info Card */}
      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.rightRow}>
            <Text style={styles.value}>John</Text>
            <Ionicons name="create-outline" size={16} color="navy" style={{ marginLeft: 6 }} />
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mobile No.</Text>
          <Text style={styles.detail}>+65 9646 4785</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>User Since</Text>
          <Text style={styles.detail}>1 Jan 2023</Text>
        </View>
      </View>

      {/* Delete Button */}
      <Pressable
        onPress={() => Alert.alert(
          "Delete Account", 
          "Are you sure you want to delete your account?", [
          { text: "Cancel", style: "cancel" },
          { text: "Delete", onPress: () => Alert.alert("Account deleted"), style: "destructive" },
        ])}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>Permanently Delete Account</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e40af",
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    gap: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "grey",
  },
  detail: {
    fontSize: 14,
    color: "grey",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e40af",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    marginTop: "auto",
    backgroundColor: "red",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
