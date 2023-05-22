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
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textColor,
    alignSelf: 'center',
  },
  inputsContainer: {
    display: 'flex',
    marginBottom: 16,
  },
  termsContainer: {
    display: 'flex',
    marginBottom: 16,
    flexDirection: 'row',
  },
  bolderText: {
    fontWeight: 'bold',
  },
  logInText: {
    alignSelf: 'center',
    color: colors['gray-400'],
  },
  logInPressable: {
    alignSelf: 'center',
    color: colors['gray-600'],
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});
