import colors from '@/utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: colors.cta,
    marginLeft: 8,
  },
});
