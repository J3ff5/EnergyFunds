import React from 'react';
import {IIconButtonProps} from './InconButton.structure';
import {Text, TouchableOpacity, View} from 'react-native';
import Icons from '@/assets/Icons';
import {styles} from './styles';
import colors from '@/utils/colors';

export default function IconButton(props: IIconButtonProps): JSX.Element {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: props.color,
        }}>
        <Icons name={props.icon} size={18} color={colors.cta} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
