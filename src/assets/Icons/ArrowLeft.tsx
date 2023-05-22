import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.51 1.87L10.73 0.0999985L0.839996 10L10.74 19.9L12.51 18.13L4.38 10L12.51 1.87Z"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function ArrowLeft({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
