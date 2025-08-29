import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { appData } from "../data/appData";

export default function Vouchers() {
  const [activeTab, setActiveTab] = useState<"active" | "past">("active");
  const vouchers = activeTab === "active" ? appData.vouchers.active : appData.vouchers.past;
    return(
      <View style={{ flex: 1, backgroundColor: "#EFEFEF" }}>
        <View style={styles.tabContainer}>
            <Pressable onPress={() => setActiveTab("active")} style={[styles.tab, activeTab === "active" && styles.activeTab]}>
                <Text style={[styles.tabText, activeTab === "active" && styles.activeTabText]}>Active</Text>
            </Pressable>
            <Pressable onPress={() => setActiveTab("past")} style={[styles.tab, activeTab === "past" && styles.activeTab]}>
                <Text style={[styles.tabText, activeTab === "past" && styles.activeTabText]}>Past</Text>
            </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {activeTab === "active"
            ? appData.vouchers.active.map((v) => (
                <Pressable key={v.id} style={styles.card} onPress={() => alert(v.title)}>
                  <Image source={v.logo} style={styles.logo} resizeMode="contain"/>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.merchant}>{v.merchant}</Text>
                    <Text style={styles.title}>{v.title}</Text>
                    <Text style={styles.expiry}>
                      Valid Until -<Text style={{ color: "red" }}>{v.expiry}</Text>
                    </Text>
                  </View>
                </Pressable>
              ))
            : appData.vouchers.past.map((v) => (
                <Pressable key={v.id} style={styles.card} onPress={() => alert(v.title)}>
                  <Image source={v.logo} style={styles.logo} resizeMode="contain"/>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.merchant}>{v.merchant}</Text>
                    <Text style={styles.title}>{v.title}</Text>
                    <Text style={styles.expiry}>
                      Redeem at – <Text style={{ color: "green" }}>{v.redeemedAt}</Text>
                    </Text>
                  </View>
                </Pressable>
              ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "navy",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  merchant: {
    fontSize: 14,
    fontWeight: "600",
    color: "navy",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000",
  },
  expiry: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
});