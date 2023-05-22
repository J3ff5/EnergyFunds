import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3333 18.6667V8C25.3333 6.53333 24.1333 5.33333 22.6667 5.33333H3.99999C2.53333 5.33333 1.33333 6.53333 1.33333 8V18.6667C1.33333 20.1333 2.53333 21.3333 3.99999 21.3333H22.6667C24.1333 21.3333 25.3333 20.1333 25.3333 18.6667ZM22.6667 18.6667H3.99999V8H22.6667V18.6667ZM13.3333 9.33333C11.12 9.33333 9.33333 11.12 9.33333 13.3333C9.33333 15.5467 11.12 17.3333 13.3333 17.3333C15.5467 17.3333 17.3333 15.5467 17.3333 13.3333C17.3333 11.12 15.5467 9.33333 13.3333 9.33333ZM30.6667 9.33333V24C30.6667 25.4667 29.4667 26.6667 28 26.6667H5.33333C5.33333 25.3333 5.33333 25.4667 5.33333 24H28V9.33333C29.4667 9.33333 29.3333 9.33333 30.6667 9.33333Z" fill="#393939"/>
</svg>

`;

interface IProps {
  size?: number;
  color: string;
}

export default function MoneyIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}