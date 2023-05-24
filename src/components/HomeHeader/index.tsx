import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import Icons from 'assets/Icons';

export default function HomeHeader(): JSX.Element {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: inset.top,
      }}>
      <View style={styles.profile}>
        <Icons name="user" size={24} color="#000" />
      </View>
      <Text style={styles.profileText}>Account: $1,457.23</Text>
      <View>
        <Icons name="notification" size={20} color="#000" />
      </View>
    </View>
  );
}
