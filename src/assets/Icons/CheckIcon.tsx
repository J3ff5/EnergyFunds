import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.8L1.2 5L0.266663 5.93334L4 9.66667L12 1.66667L11.0667 0.733337L4 7.8Z" />
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function CheckIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
