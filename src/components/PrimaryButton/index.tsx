import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import colors from 'utils/colors';

import {IPrimaryButtonProps} from './PrimaryButton.structure';
import {styles} from './styles';

export default function PrimaryButton(props: IPrimaryButtonProps) {
  const ButtonStatus = props.isDisabled
    ? styles.DisabledButton
    : [styles.ActivatedButton, {backgroundColor: colors.cta}];
  const ButtonTextStatus = props.isDisabled
    ? styles.DisabledButtonText
    : styles.ActivatedButtonText;

  return (
    <TouchableOpacity
      activeOpacity={props.isDisabled ? 1 : 0.8}
      disabled={props.isDisabled}
      onPress={props.onPress}>
      <View
        style={[
          ButtonStatus,
          {
            backgroundColor: props.isDisabled ? colors['gray-200'] : colors.cta,
          },
        ]}>
        <Text style={ButtonTextStatus}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
