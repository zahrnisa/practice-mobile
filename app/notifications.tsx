import { View, Text, StyleSheet, FlatList, ListRenderItem, Image } from "react-native";

type Notification = {
  id: string;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
};

const notifications: Notification[] = [
  { id: "1", title: "Title Here!", desc: "Description are placed here!", time: "2m", unread: true },
  { id: "2", title: "Title Here!", desc: "Description are placed here!", time: "1h", unread: true },
  { id: "3", title: "Title Here!", desc: "Description are placed here!", time: "1w", unread: false },
  { id: "4", title: "Title Here!", desc: "Description are placed here!", time: "12 May", unread: false },
];

export default function NotificationScreen() {
  const renderItem: ListRenderItem<Notification> = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Image
          source={require("../assets/images/notification.png")}
          style={styles.icon}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread && <View style={styles.dot} />}
      </View>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    marginBottom: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    borderColor: "white",
  },
  title: {
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#1e40af",
  },
  desc: {
    fontSize: 12,
    color: "black"
  },
  rightSection: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    marginTop: 4,
  },
});