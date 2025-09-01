import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index" // Taruh di sini, bukan di nesting
      screenOptions={{
        tabBarActiveTintColor: "navy",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
    </Tabs>
  );
}