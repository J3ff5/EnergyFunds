import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3698_26271" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3698_26271)">
<path d="M14 20.5V18.5H16.6L13.425 15.325L14.85 13.9L18 17.05V14.5H20V20.5H14ZM5.4 20.5L4 19.1L16.6 6.5H14V4.5H20V10.5H18V7.9L5.4 20.5ZM9.175 11.075L4 5.9L5.4 4.5L10.575 9.675L9.175 11.075Z" fill="#393939"/>
</g>
</svg>

`;

interface IProps {
  size?: number;
  color: string;
}

export default function RandomIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size - 2} height={size - 2} fill={color} />;
}
