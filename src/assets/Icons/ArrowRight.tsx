import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1521_3641)">
<path d="M6.49001 20.13L8.26001 21.9L18.16 12L8.26001 2.09998L6.49001 3.86998L14.62 12L6.49001 20.13Z"/>
</g>
<defs>
<clipPath id="clip0_1521_3641">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

`;

interface IProps {
  size?: number;
  color: string;
}

export default function ArrowRight({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
