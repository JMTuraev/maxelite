import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ShineStyle from '../assets/icons/shineStyle.svg';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Feather'; // yoki SVG


const { width } = Dimensions.get('window');
const SHINE_HEIGHT = 170; // SVG balandligi (real SVG'ga qarab sozlang)

export default function ProfileScreen() {
  return (
    <>
    
      <Header
        title="Profile"
        onLeftPress={() => {/* back yoki boshqa action */}}
        
        onRightPress={() => {/* notification action */}}
      />
          <View style={styles.container}>
    
      <View
        style={[
          styles.shineWrap,
          {
            // SVG balandligining -50% qismi tashqarida
            bottom: -(SHINE_HEIGHT * 0.5),
            height: SHINE_HEIGHT,
          },
        ]}
        pointerEvents="none"
      >
        <ShineStyle
          width={width}
          height={SHINE_HEIGHT}
        />
      </View>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>
        Here you can find interesting profiles and explore the elite community!
      </Text>
    </View>
    
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  shineWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 0,
    // bottom va height kodda dinamik
  },
  title: {
    color: '#FFE898',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: 1.5,
    zIndex: 1,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    zIndex: 1,
  },
});
