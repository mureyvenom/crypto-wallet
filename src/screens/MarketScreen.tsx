import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Crypto Wallet</Text>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  splashText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
});
