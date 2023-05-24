import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.72666 0.252293L2.89395 0.252292L2.89395 1.48973L6.66426 1.48973L0.860556 7.29344L1.68551 8.1184L7.48922 2.31469L7.48922 6.085H8.72666L8.72666 0.252293Z" />
</svg>
`;

interface IProps {
  color: string;
  size?: number;
}

export default function TopRightArrowIcon({color, size}: IProps): JSX.Element {
  return <SvgXml xml={xml} width={size || 9} height={size || 9} fill={color} />;
}
