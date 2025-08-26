import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#EFEFEF",
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "navy",
                  textAlign: "center"
                }}
              >
                Efficient Towing
              </Text>
            </View>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => router.push("/home")}
              style={{ flexDirection: "row", alignItems: "center", padding: 4 }}
            >
              <Ionicons name="arrow-back" size={24} color="navy" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
        }}
      />
    </Stack>
  );
}