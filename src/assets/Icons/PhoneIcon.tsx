import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3698_26261)">
<path d="M15.5 1.5H7.5C6.12 1.5 5 2.62 5 4V21C5 22.38 6.12 23.5 7.5 23.5H15.5C16.88 23.5 18 22.38 18 21V4C18 2.62 16.88 1.5 15.5 1.5ZM11.5 22.5C10.67 22.5 10 21.83 10 21C10 20.17 10.67 19.5 11.5 19.5C12.33 19.5 13 20.17 13 21C13 21.83 12.33 22.5 11.5 22.5ZM16 18.5H7V4.5H16V18.5Z" fill="#393939"/>
</g>
<defs>
<clipPath id="clip0_3698_26261">
<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function PhoneIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size - 2} height={size - 2} fill={color} />;
}
