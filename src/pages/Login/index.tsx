import React from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import {PrimaryButton, EmailInput, PasswordInput} from 'components';
import {useForm, Controller} from 'react-hook-form';
import {ILoginForm} from './Login.structure';
import {validateEmail} from 'utils/string';

export default function Login(): JSX.Element {
  const insets = useSafeAreaInsets();
  const {control, handleSubmit, watch} = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const email = watch('email');
  const password = watch('password');

  const [secureTextEntry, setSecureTextEntry] = React.useState(true as boolean);
  const [disabled, setDisabled] = React.useState(true as boolean);

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  React.useEffect(() => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = password.length >= 8;
    const isDisabled = !isValidEmail || !isValidPassword;
    setDisabled(isDisabled);
  }, [email, password]);

  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={{
          ...styles.container,
          paddingTop: insets.top,
        }}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <EmailInput onChange={onChange} value={value} />
            )}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <PasswordInput
                onToggleSecureTextEntry={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
                secureTextEntry={secureTextEntry}
                label="Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </View>

        <View>
          <PrimaryButton
            text="Login"
            onPress={handleSubmit(onSubmit)}
            isDisabled={disabled}
          />
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Pressable>
              <Text style={styles.underline}>Sign up</Text>
            </Pressable>
            <Text style={styles.signUpText}> here</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
