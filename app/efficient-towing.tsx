import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function EfficientTowing() {
    return(
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#EFEFEF",
        }}
        contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
        }}
        >
            <Image source={require("../assets/images/efficient-towing.png")}
            style={{ width: "100%", height: 200, borderRadius: 12 }}
            />
            
        </ScrollView>  
    );
}