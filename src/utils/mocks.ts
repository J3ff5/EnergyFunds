interface IFundMocks {
  name: string;
  value: string;
  variation: string;
  icon: string;
}

export const funds_mock: IFundMocks[] = [
  {
    name: 'Wind fund',
    value: '$1,436.21',
    variation: '2.71%',
    icon: 'wind',
  },
  {
    name: 'Solar fund',
    value: '$676.21',
    variation: '1.71%',
    icon: 'sun',
  },
  {
    name: 'Biomass fund',
    value: '$3,251.82',
    variation: '0.71%',
    icon: 'leaf',
  },
];
