// components/CoinsText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../assets/fonts/fonts';

export default function CoinsText({ amount = 0, style }) {
  return (
    <Text style={[styles.text, style]}>
      Coins: <Text style={styles.amount}>{amount}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#EEDABC', // Yoki colors.headerTextGradientStart
    fontFamily: fonts.regular,
    fontSize: 16,
    letterSpacing: 0,
  },
  amount: {
    color: '#EEDABC',
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '700',
  },
});
