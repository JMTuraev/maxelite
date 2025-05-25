import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fonts from '../assets/fonts/fonts'; // yo'lni moslang

export default function MomentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    // justifyContent kerak emas!
    paddingTop: 48, // yuqoridan pastga 48px joy tashlaymiz
  },
  title: {
    fontFamily: fonts.rustic,    // RusticRoadway font!
    fontSize: 38,
    color: '#FFE898',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});
