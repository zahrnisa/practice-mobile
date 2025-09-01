import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "navy",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ 
          title: "Home",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="relief-driver"
        options={{ 
          title: "Relief Driver",
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="car-hatchback" size={size} color={color} />
          )
         }}
      />
      <Tabs.Screen
        name="jobs-trips"
        options={{ 
          title: "Jobs / Trips",
          tabBarIcon: ({ color, size }) => (
            <View style={{
              borderWidth: 2,
              borderColor: color,
              borderRadius: 10,
              padding: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Ionicons name="car-outline" size={size} color={color} />
            </View>
          )
         }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}