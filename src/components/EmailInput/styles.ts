import {StyleSheet} from 'react-native';

import colors from 'utils/colors';

export const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: colors['gray-100'],
    marginLeft: 10,
    paddingLeft: 7,
    paddingRight: 7,
    position: 'absolute',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 14,
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'space-between',
    paddingLeft: 14,
    paddingRight: 14,
    width: '100%',
  },
  input: {
    flex: 1,
    color: colors['gray-500'],
  },
  errorMessage: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 14,
  },
  iconContainer: {},
});
