import colors from '@/utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors['gray-200'],
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  header: {
    color: '#000',
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  variation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  variationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.success,
    marginLeft: 5,
  },
});
