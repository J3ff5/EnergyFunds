import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import {styles} from './styles';
import CarbonCreditImage from '@/assets/Images/CarbonCreditImage';

export default function CarbonCreditButton(): JSX.Element {
  return (
    <Pressable
      onPress={() => {
        Linking.openURL(
          'https://en.wikipedia.org/wiki/Carbon_offsets_and_credits',
        );
      }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Learn more about {'\n'}carbon credits
          </Text>
          <Text style={styles.subtitle}>Check out our top tips!</Text>
        </View>
        <CarbonCreditImage />
      </View>
    </Pressable>
  );
}
