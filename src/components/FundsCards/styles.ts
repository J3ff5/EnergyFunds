import colors from 'utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: '#000',
  },
  scrollContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    minWidth: 160,
    minHeight: 160,
    borderWidth: 1,
    borderColor: colors['gray-300'],
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  cardGraph: {
    width: 60,
    height: 60,
  },
  name: {
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
  },
  variation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  variationText: {
    color: '#000',
  },
  percentage: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageText: {
    marginLeft: 5,
  },
});
