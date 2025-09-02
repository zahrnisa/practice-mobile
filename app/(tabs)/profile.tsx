import { View, Text, StyleSheet, Image, Switch, Pressable, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfileScreen() {
  const [isNotifEnabled, setIsNotifEnabled] = useState(true);

  const toggleSwitch = () => setIsNotifEnabled(previous => !previous);

  return (
    <SafeAreaView style={styles.container}>
        
      <Text style={styles.header}>
        <SimpleLineIcons name="user" size={20} color="navy"  /> Profile
      </Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../assets/images/profile-picture.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Pressable style={styles.row} onPress={() => router.push("/profile-edit")}>
            <Text style={styles.name}>John</Text>
            <Ionicons name="create-outline" size={16} color="navy" style={{ marginLeft: 6 }} />
          </Pressable>
          <Text style={styles.phone}>9646 4785</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>General Settings</Text>

        {/* Notification Toggle */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={isNotifEnabled}
            onValueChange={toggleSwitch}
            thumbColor="white"
            trackColor={{ false: "#ccc", true: "navy" }}
          />
        </View>

        <Pressable style={styles.settingRow} onPress={() => Alert.alert("Change Language")}>
          <Text style={styles.settingLabel}>Language</Text>
          <Text style={styles.link}>English</Text>
        </Pressable>

        <View style={styles.settingRow}>
          <Pressable onPress={() => Alert.alert("Logged out")}>
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
          <Text style={styles.version}>V1.1.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "navy",
    marginBottom: 12,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e40af",
  },
  phone: {
    fontSize: 14,
    color: "#555",
  },
  settingsContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e40af",
    marginBottom: 4,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLabel: {
    fontSize: 14,
    color: "#000",
  },
  link: {
    fontSize: 14,
    color: "navy",
    fontWeight: "600",
  },
  logout: {
    fontSize: 14,
    color: "red",
    fontWeight: "600",
  },
  version: {
    fontSize: 14,
    color: "#666",
  },
});