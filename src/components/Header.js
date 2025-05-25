import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import colors from '../assets/colors/colors';
import fonts from '../assets/fonts/fonts'; 
import GradientText from '../components/GradientText';
import CoinsBadge from '../components/CoinsBadge';

const HEADER_HEIGHT = 56;

export default function Header({
  title = "Discover",
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  coins = 0, // Props orqali coin sonini yuboramiz
  style,
  children,
}) {
  return (
    <View style={[
      styles.header,
      style,
      { height: HEADER_HEIGHT + (Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0) }
    ]}>
      <View style={styles.statusBarSpacer} />
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onLeftPress}
          style={styles.iconWrap}
        >
          {leftIcon}
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <GradientText
            text={title}
            style={styles.title}
            colors={['#EEDABC', '#987952']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        <View style={styles.rightWrap}>
          {rightIcon}
          {/* Ung tomonga CoinsBadge */}
          <CoinsBadge amount={coins} />
        </View>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBg,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.07)',
    zIndex: 2,
  },
  statusBarSpacer: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    flex: 1,
  },
  iconWrap: {
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEADER_HEIGHT,
  },
  titleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // agar RN versiyangizda gap ishlamasa, marginLeft berib chiqiladi
  },
  title: {
    textAlign: 'left',
    fontFamily: fonts.regular,
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 36,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
