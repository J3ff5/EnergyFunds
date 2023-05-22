import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.54 7.5L24.44 12H3.56L4.46 7.5H23.54ZM26 0H2V3H26V0ZM26 4.5H2L0.5 12V15H2V24H17V15H23V24H26V15H27.5V12L26 4.5ZM5 21V15H14V21H5Z" fill="white"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function ShopIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} color={color} />;
}
