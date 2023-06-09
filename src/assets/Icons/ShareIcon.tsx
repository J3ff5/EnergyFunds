import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3669_23914" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
<rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3669_23914)">
<path d="M6.5 23C5.95 23 5.47917 22.8042 5.0875 22.4125C4.69583 22.0208 4.5 21.55 4.5 21V10C4.5 9.45 4.69583 8.97917 5.0875 8.5875C5.47917 8.19583 5.95 8 6.5 8H9.5V10H6.5V21H18.5V10H15.5V8H18.5C19.05 8 19.5208 8.19583 19.9125 8.5875C20.3042 8.97917 20.5 9.45 20.5 10V21C20.5 21.55 20.3042 22.0208 19.9125 22.4125C19.5208 22.8042 19.05 23 18.5 23H6.5ZM11.5 16V4.825L9.9 6.425L8.5 5L12.5 1L16.5 5L15.1 6.425L13.5 4.825V16H11.5Z" fill="#393939"/>
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function ShareIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
