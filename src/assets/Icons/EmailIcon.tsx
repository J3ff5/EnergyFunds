import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3698_26241" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3698_26241)">
<path d="M4 20.5C3.45 20.5 2.97917 20.3042 2.5875 19.9125C2.19583 19.5208 2 19.05 2 18.5V6.5C2 5.95 2.19583 5.47917 2.5875 5.0875C2.97917 4.69583 3.45 4.5 4 4.5H20C20.55 4.5 21.0208 4.69583 21.4125 5.0875C21.8042 5.47917 22 5.95 22 6.5V18.5C22 19.05 21.8042 19.5208 21.4125 19.9125C21.0208 20.3042 20.55 20.5 20 20.5H4ZM12 13.5L4 8.5V18.5H20V8.5L12 13.5ZM12 11.5L20 6.5H4L12 11.5ZM4 8.5V6.5V18.5V8.5Z" fill="#393939"/>
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function EmailIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size - 2} height={size - 2} fill={color} />;
}
