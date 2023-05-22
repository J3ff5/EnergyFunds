import React from 'react';
import {Text, TextInput, View} from 'react-native';

import ErrorIcon from 'assets/Icons/ErrorIcon';
import colors from 'utils/colors';
import {formatName} from 'utils/string';

import {INameInputProps} from './NameInput.structure';
import {styles} from './styles';

export default function NameInput(props: INameInputProps) {
  const handleNameChange = (name: string) => {
    props.onChange(formatName(name));
  };

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {borderColor: props.errorMessage ? colors.error : colors['gray-300']},
        ]}>
        <TextInput
          placeholder={props.placeholder || 'Insert your name'}
          placeholderTextColor={colors['gray-300']}
          value={props.value}
          onChangeText={handleNameChange}
          style={[
            styles.input,
            {color: props.isDisabled ? colors['gray-400'] : colors['gray-500']},
          ]}
          editable={!props.isDisabled}
        />
        {props.errorMessage && (
          <View>
            <ErrorIcon size={18} color={colors.error} />
          </View>
        )}
      </View>
      {props.errorMessage && (
        <Text style={styles.errorMessage}>Insert a valid name</Text>
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
