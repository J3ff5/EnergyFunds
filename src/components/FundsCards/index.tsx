import React from 'react';
import {funds_mock} from 'utils/mocks';
import {View, Text, ScrollView} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import {styles} from './styles';
import colors from 'utils/colors';
import Icons from '@/assets/Icons';

export default function FundsCards(): JSX.Element {
  const renderFunds = React.useMemo(() => {
    return funds_mock.map((fund, index) => {
      const data = Array.from({length: 10}, () =>
        Math.floor(Math.random() * 50),
      );
      const lastValue = data[data.length - 1];
      const penultimateValue = data[data.length - 2];

      const getIfDrop = () => {
        if (lastValue > penultimateValue) {
          return colors.success;
        }

        return colors.error;
      };

      const renderCorrectArrow = () => {
        if (lastValue > penultimateValue) {
          return (
            <Icons name="top-right-arrow" size={10} color={colors.success} />
          );
        }

        return (
          <Icons name="bottom-right-arrow" size={10} color={colors.error} />
        );
      };

      const getVariation = () => {
        const division = lastValue / penultimateValue;
        const variation = (division - 1) * 100;
        return variation.toFixed(2);
      };

      return (
        <View key={index} style={styles.card}>
          <Icons name={fund.icon} size={16} color="" />
          <Text style={styles.name}>{fund.name}</Text>
          <LineChart
            data={data}
            style={styles.cardGraph}
            svg={{stroke: getIfDrop()}}
          />
          <View style={styles.variation}>
            <Text style={styles.variationText}>{fund.value}</Text>
            <View style={styles.percentage}>
              {renderCorrectArrow()}
              <Text
                style={{
                  ...styles.percentageText,
                  color: getIfDrop(),
                }}>
                {getVariation()}%
              </Text>
            </View>
          </View>
        </View>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funds</Text>
      <ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {renderFunds}
      </ScrollView>
    </View>
  );
}
