import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MomentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>
        Here you can find interesting profiles and explore the elite community!
      </Text>
      {/* Keyinchalik bu yerga discovery cards, list, va boshqa UI qo'shasiz */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919', // Sizning app dark bg
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#FFE898',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: 1.5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
});
