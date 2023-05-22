import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.22922 0.653521C1.55352 8.8816 0.5 9.72606 0.5 12.75C0.5 16.8921 3.85785 20.25 8 20.25C12.1421 20.25 15.5 16.8921 15.5 12.75C15.5 9.72606 14.4465 8.8816 8.77078 0.653521C8.39832 0.115475 7.60164 0.115513 7.22922 0.653521Z"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function WaterDropIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
