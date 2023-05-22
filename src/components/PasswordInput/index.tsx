import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import CloseEyeIcon from 'assets/Icons/CloseEyeIcon';
import OpenEyeIcon from 'assets/Icons/OpenEyeIcon';
import colors from 'utils/colors';

import {IPasswordInputProps} from './PasswordInput.structure';
import {styles} from './styles';

export default function PasswordInput(props: IPasswordInputProps) {
  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {borderColor: props.errorMessage ? colors.error : colors['gray-300']},
        ]}>
        <TextInput
          placeholder={props.placeholder || 'Insert your password'}
          placeholderTextColor={colors['gray-300']}
          value={props.value}
          onChangeText={props.onChange}
          secureTextEntry={props.secureTextEntry}
          style={[styles.input, {color: colors['gray-500']}]}
        />
        <TouchableOpacity onPress={props.onToggleSecureTextEntry}>
          {props.secureTextEntry ? (
            <CloseEyeIcon size={20} color={colors['gray-300']} />
          ) : (
            <OpenEyeIcon size={20} color={colors['gray-300']} />
          )}
        </TouchableOpacity>
      </View>
      {props.errorMessage && (
        <Text style={styles.errorMessage}>
          {props.errorMessage || 'Invalid password'}
        </Text>
      )}
      <View
        style={[styles.labelContainer, {bottom: props.errorMessage ? 59 : 41}]}>
        <Text
          style={[
            styles.label,
            {
              color: props.errorMessage ? colors.error : colors.cta,
            },
          ]}>
          {props.label}
        </Text>
      </View>
    </View>
  );
}
