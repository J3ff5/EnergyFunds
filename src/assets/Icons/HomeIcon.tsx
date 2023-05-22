import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4.535L22.5 11.285V23H19.5V14H10.5V23H7.5V11.285L15 4.535ZM15 0.5L0 14H4.5V26H13.5V17H16.5V26H25.5V14H30L15 0.5Z" />
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function HomeIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
