import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1833_14442" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1833_14442)">
<path d="M14.6667 22.6667H17.3333V21.3333H18.6667C19.0444 21.3333 19.3613 21.2053 19.6173 20.9493C19.8724 20.6942 20 20.3778 20 20V16C20 15.6222 19.8724 15.3053 19.6173 15.0493C19.3613 14.7942 19.0444 14.6667 18.6667 14.6667H14.6667V13.3333H20V10.6667H17.3333V9.33333H14.6667V10.6667H13.3333C12.9556 10.6667 12.6391 10.7942 12.384 11.0493C12.128 11.3053 12 11.6222 12 12V16C12 16.3778 12.128 16.6942 12.384 16.9493C12.6391 17.2053 12.9556 17.3333 13.3333 17.3333H17.3333V18.6667H12V21.3333H14.6667V22.6667ZM5.33333 26.6667C4.6 26.6667 3.97245 26.4058 3.45067 25.884C2.928 25.3613 2.66667 24.7333 2.66667 24V8C2.66667 7.26667 2.928 6.63911 3.45067 6.11733C3.97245 5.59467 4.6 5.33333 5.33333 5.33333H26.6667C27.4 5.33333 28.028 5.59467 28.5507 6.11733C29.0724 6.63911 29.3333 7.26667 29.3333 8V24C29.3333 24.7333 29.0724 25.3613 28.5507 25.884C28.028 26.4058 27.4 26.6667 26.6667 26.6667H5.33333ZM5.33333 24H26.6667V8H5.33333V24Z" fill="#393939"/>
</g>
</svg>

`;

interface IProps {
  size?: number;
  color: string;
}

export default function DollarIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}