import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27ZM15.465 13.71C12.81 13.035 11.955 12.3 11.955 11.205C11.955 9.945 13.14 9.06 15.105 9.06C17.175 9.06 17.955 10.05 18.015 11.52H20.58C20.505 9.51 19.275 7.665 16.845 7.065V4.5H13.35V7.035C11.085 7.515 9.27 8.985 9.27 11.25C9.27 13.935 11.505 15.285 14.76 16.065C17.685 16.755 18.27 17.79 18.27 18.87C18.27 19.665 17.685 20.955 15.12 20.955C12.72 20.955 11.775 19.875 11.64 18.495H9.06C9.21 21.045 11.1 22.485 13.35 22.95V25.5H16.86V22.995C19.14 22.56 20.94 21.255 20.955 18.84C20.94 15.54 18.105 14.4 15.465 13.71Z" />
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function MonetizationIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
