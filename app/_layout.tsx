import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: styles.colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      <Stack.Screen
        name="my-voucher"
        options={{
          headerTitle: () => (
            <View>
              <Text style={styles.typography.headerTitle}>My Voucher</Text>
            </View>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={styles.common.headerButton}>
              <Ionicons name="arrow-back" size={24} color={styles.colors.primary} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          headerTitle: () => (
            <View>
              <Text style={styles.typography.headerTitle}>Notifications</Text>
            </View>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={styles.common.backButton}>
              <MaterialIcons name="arrow-back-ios" size={24} color={styles.colors.primary} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={styles.common.clearButton} onPress={() => console.log("Clear clicked!")}>
              <Text style={styles.typography.clearText}>Clear</Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}

const styles = {
  colors: {
    primary: "navy",
    secondary: "#555",
    background: "#EFEFEF",
    danger: "red",
    success: "green",
  },
  typography: StyleSheet.create({
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "navy",
      textAlign: "center",
      alignItems: "center",
    },
    clearText: {
      fontSize: 14,
      fontWeight: "500",
      color: "navy",
    },
  }),
  common: StyleSheet.create({
    headerButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: 4,
    },
    backButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 18,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    clearButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
  }),
};