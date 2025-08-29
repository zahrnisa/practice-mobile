import { View, Text, ScrollView, Image, StyleSheet, Pressable, StatusBar, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { appData } from "../../data/appData";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      
      {/* Greeting user*/}
      <View style={styles.greeting}>
        <Image
          source={require("../../assets/images/user-pic.png")}
          style={styles.avatar}
        />
        <Text style={styles.greetingText}>Hello!
          <Text style={styles.greetingName}> John</Text>
        </Text>

        <Pressable onPress={() => router.push("/notifications")}>
          <View style={styles.notificationWrapper}>
            <Ionicons name="notifications" size={22} color="navy" />
          </View>
        </Pressable>
      </View>

      {/* Verify profile */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Verify your profile to get full benefits</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </Pressable>
      
      {/* Crowed Predictor */}
      <View style={styles.titleLinkComponents}>
        <Text style={styles.titleText}>Today&apos;s Crowd Predictor</Text>
        <Text style={styles.textLink}>View All</Text>
      </View>
      <Text
        style={{
          backgroundColor: "white",
          padding: 6,
          borderRadius: 30,
          textAlign: "center",
          color: "grey",
        }}
      >
        No event Today!
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit your prediction</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </Pressable>

      {/* Your Vouchers */}
      <View style={styles.titleLinkComponents}>
        <Text style={styles.titleText}>Your Vouchers</Text>
        <Pressable onPress={() => router.push("/my-voucher")}>
          <Text style={styles.textLink}>View All</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {appData.vouchers.active.map((voucher) => (
          <View key={voucher.id} style={styles.voucherCard}>
            <Image source={voucher.logo} style={styles.voucherLogo} resizeMode="contain"/>
            <View>
              <Text style={styles.merchant}>{voucher.merchant}</Text>
              <Text style={styles.voucherTitle}>{voucher.title}</Text>
              <View>
                <Text style={styles.expiry}>Valid Until</Text>
                <Text style={[styles.expiry, { color: "red", fontWeight: "bold", marginTop: 2 }]}>
                  {voucher.expiry}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Benefits & Promotions */}
      <View style={styles.titleLinkComponents}>
        <Text style={styles.titleText}>Benefits & Promotions</Text>
        <Text style={styles.textLink}>View all</Text>
      </View>

      <View style={styles.promoGrid}>
        <View style={styles.promoCard}>
          <Image
            source={require("../../assets/images/chevrolet.jpg")}
            style={styles.promoLogo} resizeMode="contain"
          />
          <Text style={styles.promoTitle}>Chevrolet Service</Text>
          <Text style={styles.promoSubtitle}>Free service check</Text>
          <Pressable style={styles.promoButton}>
            <Pressable onPress={() => router.push("/benefits")}>
              <Text style={styles.promoButtonText}>Get Coupon!</Text>
            </Pressable>
          </Pressable>
        </View>

        <View style={styles.promoCard}>
          <Image
            source={require("../../assets/images/Bosch-service.png")}
            style={styles.promoLogo} resizeMode="contain"
          />
          <Text style={styles.promoTitle}>Chevrolet Service</Text>
          <Text style={styles.promoSubtitle}>Free service check</Text>
          <Pressable style={styles.promoButton}>
            <Pressable onPress={() => router.push("/benefits")}>
              <Text style={styles.promoButtonText}>Get Coupon!</Text>
            </Pressable>
          </Pressable>
        </View>

        <View style={styles.promoCard}>
          <Image
            source={require("../../assets/images/chevrolet.jpg")}
            style={styles.promoLogo} resizeMode="contain"
          />
          <Text style={styles.promoTitle}>Chevrolet Service</Text>
          <Text style={styles.promoSubtitle}>Free service check</Text>
          <Pressable style={styles.promoButton}>
            <Pressable onPress={() => router.push("/benefits")}>
              <Text style={styles.promoButtonText}>Get Coupon!</Text>
            </Pressable>
          </Pressable>
        </View>

        <View style={styles.promoCard}>
          <Image
            source={require("../../assets/images/Bosch-service.png")}
            style={styles.promoLogo} resizeMode="contain"
          />
          <Text style={styles.promoTitle}>Chevrolet Service</Text>
          <Text style={styles.promoSubtitle}>Free service check</Text>
          <Pressable style={styles.promoButton}>
            <Pressable onPress={() => router.push("/benefits")}>
              <Text style={styles.promoButtonText}>Get Coupon!</Text>
            </Pressable>
          </Pressable>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.titleLinkComponents}>
        <Text style={styles.titleText}>Recent Transactions</Text>
        <Text style={styles.textLink}>View all</Text>
      </View>

      <View style={styles.transactionList}>
        {appData.transactions.map((item) => (
          <View key={item.id} style={styles.transactionItem}>
            <Image source={item.logo} style={styles.transactionLogo} resizeMode="contain"/>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <View style={styles.transactionRight}>
              <Text style={styles.transactionTime}>{item.time}</Text>
              <Text
                style={[
                  styles.transactionAmount,
                  item.type === "income" ? { color: "green" } : { color: "red" },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginBottom: 20
  },
  notificationWrapper: {
    marginLeft: "auto",
    position: "relative",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: "white",
  },
  greetingText: {
    flex: 1,
    fontSize: 16,
    color: "black",
    fontWeight: "medium",
  },
  greetingName: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "navy",
    borderRadius: 30,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    gap: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "200",
  },
  titleLinkComponents: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "600",
    color: "navy",
    marginVertical: 16,
  },
  textLink: {
    color: "navy",
    fontWeight: "medium",
  },
  voucherCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    alignItems: "center",
    width: 250,
    height: 120,
  },
  voucherLogo: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  merchant: {
    fontSize: 11,
    fontWeight: "bold",
    color: "navy",
  },
  voucherTitle: {
    fontSize: 18,
    paddingBottom: 10,
    fontWeight:"bold",
    color: "#000",
  },
  expiry: {
    fontSize: 11,
    color: "#555",
  },
  promoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  promoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingBottom: 10,
    marginBottom: 12,
    width: "48%",
    alignItems: "center",
  },
  promoLogo: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
  },
  promoPlaceholder: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#ddd",
  },
  promoTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: "navy",
  },
  promoSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  promoButton: {
    backgroundColor: "navy",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 50,
    marginTop: 6,
  },
  promoButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  transactionList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 2,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginHorizontal: 12,
  },
  transactionLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  transactionDate: {
    fontSize: 12,
    color: "grey",
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionTime: {
    fontSize: 12,
    color: "grey",
  },
});