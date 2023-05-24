import React from 'react';
import {Text, View} from 'react-native';
import {IconButton} from 'components';
import {styles} from './styles';
import Icons from 'assets/Icons';
import colors from 'utils/colors';

export default function Portifolio(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Portifolio</Text>
        <View style={styles.description}>
          <Text style={styles.amount}>$1,245.23</Text>
          <View style={styles.variation}>
            <Icons name="top-right-arrow" size={12} color={colors.success} />
            <Text style={styles.variationText}>31,82%</Text>
          </View>
        </View>
      </View>
      <IconButton
        color={colors['cta-light']}
        icon="monetization"
        onPress={() => {}}
        text="Earn Rewards"
      />
    </View>
  );
}
