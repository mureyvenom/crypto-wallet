import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { numberWithCommas } from '../utils/helpers';

const topCryptoData = [
  {
    title: 'Bitcoin',
    icon: <FontAwesome name="bitcoin" color="#fff" size={18} />,
    value: 35003.26,
    percentage: 2.3,
    holdingValue: 35003.26,
    holdingQuantity: 1,
  },
  {
    title: 'Ethereum',
    icon: <FontAwesome name="dollar" color="#fff" size={18} />,
    value: 3783.26,
    percentage: 2.3,
    holdingValue: 3783.26,
    holdingQuantity: 1,
  },
  {
    title: 'Bitcoin',
    icon: <FontAwesome name="bitcoin" color="#fff" size={18} />,
    value: 35003.26,
    percentage: 2.3,
    holdingValue: 35003.26,
    holdingQuantity: 1,
  },
  {
    title: 'Ethereum',
    icon: <FontAwesome name="dollar" color="#fff" size={18} />,
    value: 3783.26,
    percentage: 2.3,
    holdingValue: 3783.26,
    holdingQuantity: 1,
  },
];

interface ActionButton {
  children: ReactNode;
  onPress?: () => void;
}

const ActionButton = ({ children, onPress }: ActionButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.actionButtons}>{children}</View>
    </TouchableOpacity>
  );
};

interface TopCrypto {
  title: string;
  icon: ReactNode;
  value: number;
  percentage: number;
  holdingValue: number;
  holdingQuantity: number;
}

interface Cryp {
  crypto: TopCrypto;
}

const TopCrypto = ({ crypto }: Cryp) => {
  const { icon, percentage, title, value, holdingQuantity, holdingValue } =
    crypto;

  return (
    <TouchableOpacity>
      <View style={styles.topCryptoView}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {icon}
          <Text style={{ marginLeft: 5, color: '#fff' }}>{title}</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text style={{ color: '#fff' }}>$ {numberWithCommas(value)}</Text>
            <Text style={{ color: '#44BC5D' }}>{percentage}%</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text style={{ color: '#fff' }}>
              $ {numberWithCommas(holdingValue)}
            </Text>
            <Text
              style={{
                color: '#aaa',
              }}>{`${holdingQuantity} ${title}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.balanceView}>
          <View>
            <Text style={styles.titleText}>Your Wallet</Text>
            <Text style={styles.balanceText}>$45,787.27 USD</Text>
          </View>
          <View style={styles.changeView}>
            <Text style={styles.changePercent}>2.3%</Text>
            <Text style={styles.dayChange}>7d Change</Text>
          </View>
        </View>
        <View style={styles.actionView}>
          <ActionButton>
            <Ionicons
              name="paper-plane"
              style={{ marginRight: 5, fontSize: 16, color: '#000' }}
            />
            <Text style={{ fontSize: 16, color: '#000' }}>Transfer</Text>
          </ActionButton>
          <ActionButton>
            <FontAwesome
              name="arrow-circle-down"
              style={{ marginRight: 5, fontSize: 16, color: '#000' }}
            />
            <Text style={{ fontSize: 16, color: '#000' }}>Widthdraw</Text>
          </ActionButton>
        </View>
        <View style={styles.chartView}>
          <Text style={{ color: '#fff' }}>Chart here</Text>
        </View>
        <View style={styles.topCurrenciesView}>
          <Text style={styles.topCurrenciesHeader}>Your Assets</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#ccc', fontWeight: '700' }}>Asset</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text
                style={{
                  color: '#ccc',
                  fontWeight: '700',
                  textAlign: 'right',
                  flex: 1,
                }}>
                Price
              </Text>
              <Text
                style={{
                  color: '#ccc',
                  fontWeight: '700',
                  textAlign: 'right',
                  flex: 1,
                }}>
                Holdings
              </Text>
            </View>
          </View>
          <View>
            {topCryptoData.map((c, i) => (
              <TopCrypto crypto={c} key={i} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balanceView: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 70 : 40,
    paddingBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleText: {
    color: '#ccc',
    fontWeight: '700',
    marginBottom: 4,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  changeView: {
    flexDirection: 'row',
  },
  changePercent: {
    color: '#44BC5D',
    marginRight: 10,
  },
  dayChange: {
    color: '#ccc',
  },
  actionButtons: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -20,
  },
  chartView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCurrenciesView: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  topCurrenciesHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
  },
  topCryptoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});
