import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1833_14449" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1833_14449)">
<path d="M6.66667 29.3333C5.93333 29.3333 5.30533 29.0724 4.78267 28.5507C4.26089 28.028 4 27.4 4 26.6667V8H6.66667V26.6667H21.3333V29.3333H6.66667ZM12 24C11.2667 24 10.6391 23.7391 10.1173 23.2173C9.59467 22.6947 9.33333 22.0667 9.33333 21.3333V5.33333C9.33333 4.6 9.59467 3.972 10.1173 3.44933C10.6391 2.92756 11.2667 2.66667 12 2.66667H24C24.7333 2.66667 25.3613 2.92756 25.884 3.44933C26.4058 3.972 26.6667 4.6 26.6667 5.33333V21.3333C26.6667 22.0667 26.4058 22.6947 25.884 23.2173C25.3613 23.7391 24.7333 24 24 24H12ZM12 21.3333H24V5.33333H12V21.3333Z" fill="#393939"/>
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function CopyIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} stroke={color} />;
}
