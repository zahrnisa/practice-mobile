import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { appData } from '../data/appData';

export default function PromotionsScreen() {
  const promotions = appData.promotions;

    const renderItem = ({ item }: { item: typeof appData.promotions[0] }) => (
    <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.cardContent}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
        </View>
    </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={promotions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#EFEFEF",
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginVertical: 6,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#004AAD',
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
