import {StyleSheet} from 'react-native';
import colors from 'utils/colors';

export const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors['gray-100'],
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 100,
    color: colors.textColor,
    alignSelf: 'center',
    marginBottom: 100,
  },
  inputsContainer: {
    display: 'flex',
    marginBottom: 16,
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpText: {
    alignSelf: 'center',
    color: colors['gray-300'],
  },
  underline: {
    textDecorationColor: colors['gray-300'],
    textDecorationLine: 'underline',
    color: colors['gray-300'],
  },
});
