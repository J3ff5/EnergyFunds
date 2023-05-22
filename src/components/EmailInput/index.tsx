import React from 'react';
import {Text, TextInput, View} from 'react-native';

import ErrorIcon from 'assets/Icons/ErrorIcon';
import colors from 'utils/colors';
import {validateEmail} from 'utils/string';

import {IEmailInputProps} from './EmailInput.structure';
import {styles} from './styles';

export default function EmailInput(props: IEmailInputProps) {
  const [hasError, setHasError] = React.useState(false as boolean);

  React.useEffect(() => {
    if (props.value.length > 0) {
      setHasError(!validateEmail(props.value));
    } else {
      setHasError(false);
    }
  }, [props.value]);

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor:
              props.errorMessage || hasError
                ? colors.error
                : colors['gray-300'],
          },
        ]}>
        <TextInput
          autoCapitalize="none"
          placeholder="Insert your e-mail"
          placeholderTextColor={colors['gray-300']}
          keyboardType="email-address"
          value={props.value}
          onChangeText={props.onChange}
          style={styles.input}
        />
        {props.errorMessage ||
          (hasError && (
            <View style={styles.iconContainer}>
              <ErrorIcon size={18} color={colors.error} />
            </View>
          ))}
      </View>
      {props.errorMessage ||
        (hasError && (
          <Text style={styles.errorMessage}>
            {props.errorMessage || 'Invalid e-mail'}
          </Text>
        ))}
      <View
        style={[
          styles.labelContainer,
          {bottom: props.errorMessage || hasError ? 59 : 41},
        ]}>
        <Text
          style={[
            styles.label,
            {
              color: props.errorMessage || hasError ? colors.error : colors.cta,
            },
          ]}>
          E-mail
        </Text>
      </View>
    </View>
  );
}
