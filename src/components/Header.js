import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import colors from '../theme/colors'; // global ranglar
import fonts from '../theme/fonts';   // global shriftlar

export default function Header({
  title,
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  style,
  children,
}) {
  return (
    <View style={[styles.header, style]}>
      {/* StatusBar balandligi uchun universal */}
      <View style={styles.statusBarSpacer} />
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onLeftPress}
          style={styles.iconWrap}
        >
          {leftIcon}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onRightPress}
          style={styles.iconWrap}
        >
          {rightIcon}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBg, // #08080A
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
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
    minHeight: 48,
  },
  iconWrap: {
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.primaryText,
    fontFamily: fonts.regular,  // Times New Roman
    fontSize: 35,               // Figma bo‘yicha
    letterSpacing: 0,           // Figma bo‘yicha
  },
});
