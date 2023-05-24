import Cotations from '@/services/Cotations';
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ICotations} from './Cotation.structure';
import {styles} from './styles';

export default function Cotation(): JSX.Element {
  const [cotations, setCotations] = React.useState([] as ICotations[]);

  const getCurrencies = React.useCallback(async () => {
    const response = await Cotations.getCotations();
    if (!response) {
      return;
    }

    setCotations(
      Object.keys(response).map(key => {
        return {
          name: response[key].name,
          bid: response[key].bid,
        };
      }),
    );
  }, []);

  React.useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  const renderCotations = React.useMemo(() => {
    return cotations.map((cotation, index) => {
      return (
        <View key={index} style={styles.cotation}>
          <Text style={styles.cotationName}>{cotation.name}</Text>
          <Text style={styles.cotationBid}>{cotation.bid}</Text>
        </View>
      );
    });
  }, [cotations]);

  return (
    <View style={styles.container}>
      <Text>Cotation</Text>
      {renderCotations}
    </View>
  );
}
