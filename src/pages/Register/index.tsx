import React from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import Icons from 'assets/Icons';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {IRegisterForm} from './Register.structure';
import {
  Checkbox,
  EmailInput,
  NameInput,
  PasswordInput,
  PrimaryButton,
} from 'components';

export default function Register(): JSX.Element {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const {control, handleSubmit, watch} = useForm<IRegisterForm>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
    },
  });
  const email = watch('email');
  const password = watch('password');
  const name = watch('name');
  const lastName = watch('lastName');

  const disabled = !email || !password || !name || !lastName;

  const [secureTextEntry, setSecureTextEntry] = React.useState(true as boolean);
  const [isChecked, setIsChecked] = React.useState(false as boolean);

  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <Pressable
      style={{
        ...styles.pressableContainer,
        paddingTop: insets.top,
      }}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icons name="arrow-left" size={20} color="#000" />
          </Pressable>
          <Text style={styles.title}>Create your account</Text>
          <View />
        </View>
        <View style={styles.inputsContainer}>
          <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}}) => (
              <NameInput label="First Name" onChange={onChange} value={value} />
            )}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Controller
            name="lastName"
            control={control}
            render={({field: {onChange, value}}) => (
              <NameInput
                label="Last Name"
                onChange={onChange}
                value={value}
                placeholder="Insert your last name"
              />
            )}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, value}}) => (
              <EmailInput onChange={onChange} value={value} />
            )}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value}}) => (
              <PasswordInput
                secureTextEntry={secureTextEntry}
                onToggleSecureTextEntry={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
                label="Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </View>
        <View style={styles.termsContainer}>
          <Checkbox
            onPress={() => {
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
            label={
              <Text>
                I am over 18 years of age and I have read and agree {'\n'} to
                the <Text style={styles.bolderText}>Terms of Service</Text> and{' '}
                <Text style={styles.bolderText}>Privacy policy</Text>.
              </Text>
            }
          />
        </View>
        <PrimaryButton
          text="Login"
          onPress={handleSubmit(onSubmit)}
          isDisabled={disabled || !isChecked}
        />
        <Text style={styles.logInText}>
          Already have an account?{' '}
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.logInPressable}>Log in</Text>
          </Pressable>
        </Text>
      </View>
    </Pressable>
  );
}
