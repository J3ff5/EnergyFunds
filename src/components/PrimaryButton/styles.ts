import {StyleSheet} from 'react-native';

import colors from 'utils/colors';

export const styles = StyleSheet.create({
  ActivatedButton: {
    width: '100%',
    minWidth: 140,
    borderRadius: 8,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  ActivatedButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  DisabledButton: {
    width: '100%',
    minWidth: 140,
    borderRadius: 8,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  DisabledButtonText: {
    color: colors['gray-300'],
    fontWeight: 'bold',
    fontSize: 16,
  },
});
