import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';

import Icons from 'assets/Icons';
import colors from 'utils/colors';

import {ICheckBoxProps} from './CheckBox.structure';
import {styles} from './styles';

export default function Checkbox(props: ICheckBoxProps) {
  const changeBorderColor = () => {
    if (props.isChecked && props.isDisabled) {
      return colors['gray-200'];
    }
    if (props.isChecked) {
      return colors.cta;
    }

    return colors['gray-300'];
  };

  const changeBackgroundColor = () => {
    if (props.isChecked && props.isDisabled) {
      return colors['gray-200'];
    }
    if (props.isChecked) {
      return colors.cta;
    }

    return colors['gray-100'];
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress} disabled={props.isDisabled}>
        <View style={styles.checkBoxContainer}>
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: changeBackgroundColor(),
                borderColor: changeBorderColor(),
              },
            ]}>
            {props.isChecked && (
              <Icons
                name="check"
                color={props.isDisabled ? colors['gray-300'] : '#FFF'}
                size={14}
              />
            )}
          </View>
          {props.label && typeof props.label === 'string' ? (
            <Text style={[styles.label, {opacity: props.isDisabled ? 0.6 : 1}]}>
              {props.label}
            </Text>
          ) : (
            props.label
          )}
        </View>
      </Pressable>
      {props.onTipPress && (
        <TouchableOpacity onPress={props.onTipPress} style={styles.tip}>
          <Icons name="tip-outside" color="#FFF" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}
