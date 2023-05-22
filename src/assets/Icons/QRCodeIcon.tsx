import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1833_14470" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1833_14470)">
<path d="M4 14.6667V4H14.6667V14.6667H4ZM6.66667 12H12V6.66667H6.66667V12ZM4 28V17.3333H14.6667V28H4ZM6.66667 25.3333H12V20H6.66667V25.3333ZM17.3333 14.6667V4H28V14.6667H17.3333ZM20 12H25.3333V6.66667H20V12ZM25.3333 28V25.3333H28V28H25.3333ZM17.3333 20V17.3333H20V20H17.3333ZM20 22.6667V20H22.6667V22.6667H20ZM17.3333 25.3333V22.6667H20V25.3333H17.3333ZM20 28V25.3333H22.6667V28H20ZM22.6667 25.3333V22.6667H25.3333V25.3333H22.6667ZM22.6667 20V17.3333H25.3333V20H22.6667ZM25.3333 22.6667V20H28V22.6667H25.3333Z"/>
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function QRCodeIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
