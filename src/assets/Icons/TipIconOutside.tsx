import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.00298C9.24196 8.33515 9.71954 7.77201 10.3482 7.4133C10.9768 7.05459 11.7158 6.92347 12.4345 7.04316C13.1531 7.16284 13.805 7.52561 14.2745 8.06721C14.7441 8.60881 15.0011 9.29429 15 10.0022C15 12.0007 11.9125 13 11.9125 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17H12.0116" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function TipIconOutside({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} stroke={color} />;
}
