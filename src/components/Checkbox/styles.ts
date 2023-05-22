import {StyleSheet} from 'react-native';

import colors from 'utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkBoxContainer: {alignItems: 'center', flexDirection: 'row'},
  checkbox: {
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    height: 20,
    justifyContent: 'center',
    marginRight: 8,
    width: 20,
  },
  label: {
    color: colors['gray-400'],
    fontSize: 14,
    fontWeight: '400',
  },
  tip: {
    marginLeft: 8,
  },
});
