import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {
  CarbonCreditButton,
  Cotation,
  FundsCards,
  HomeHeader,
  Portifolio,
} from 'components';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Portifolio />
      <FundsCards />
      <CarbonCreditButton />
      <Cotation />
    </View>
  );
}
