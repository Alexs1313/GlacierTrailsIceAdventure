import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GlacierTrailsIcadventrelay = ({
  children,
  bounce = true,
}: {
  children: React.ReactNode;
  wudlanndvildexplorrlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(10, 93, 137)', 'rgb(3, 31, 44)']}
      style={styles.wudlanndvildexplorrlayBackground}>
      <ScrollView
        bounces={bounce}
        contentContainerStyle={styles.wudlanndvildexplorrlayScrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wudlanndvildexplorrlayBackground: {
    flex: 1,
  },
  wudlanndvildexplorrlayScrollContent: {
    flexGrow: 1,
  },
  wudlanndvildexplorrlayFill: {
    flex: 1,
  },
});

export default GlacierTrailsIcadventrelay;
