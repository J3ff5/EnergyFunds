import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3146_5434" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
<rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3146_5434)">
<path d="M5.5 19H6.9L15.525 10.375L14.125 8.975L5.5 17.6V19ZM19.8 8.925L15.55 4.725L16.95 3.325C17.3333 2.94167 17.8043 2.75 18.363 2.75C18.921 2.75 19.3917 2.94167 19.775 3.325L21.175 4.725C21.5583 5.10833 21.7583 5.571 21.775 6.113C21.7917 6.65433 21.6083 7.11667 21.225 7.5L19.8 8.925ZM18.35 10.4L7.75 21H3.5V16.75L14.1 6.15L18.35 10.4Z" />
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function EditIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
