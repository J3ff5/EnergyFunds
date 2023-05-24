import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3657_24858" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3657_24858)">
<path d="M12 23.7992L8.65 20.4992H4V15.8492L0.699997 12.4992L4 9.14922V4.49922H8.65L12 1.19922L15.35 4.49922H20V9.14922L23.3 12.4992L20 15.8492V20.4992H15.35L12 23.7992ZM12 18.4992C13.6667 18.4992 15.0833 17.9159 16.25 16.7492C17.4167 15.5826 18 14.1659 18 12.4992C18 10.8326 17.4167 9.41589 16.25 8.24922C15.0833 7.08255 13.6667 6.49922 12 6.49922C10.3333 6.49922 8.91666 7.08255 7.75 8.24922C6.58333 9.41589 6 10.8326 6 12.4992C6 14.1659 6.58333 15.5826 7.75 16.7492C8.91666 17.9159 10.3333 18.4992 12 18.4992ZM12 16.4992C10.9 16.4992 9.95833 16.1076 9.175 15.3242C8.39166 14.5409 8 13.5992 8 12.4992C8 11.3992 8.39166 10.4576 9.175 9.67422C9.95833 8.89089 10.9 8.49922 12 8.49922C13.1 8.49922 14.0417 8.89089 14.825 9.67422C15.6083 10.4576 16 11.3992 16 12.4992C16 13.5992 15.6083 14.5409 14.825 15.3242C14.0417 16.1076 13.1 16.4992 12 16.4992ZM12 20.9992L14.5 18.4992H18V14.9992L20.5 12.4992L18 9.99922V6.49922H14.5L12 3.99922L9.5 6.49922H6V9.99922L3.5 12.4992L6 14.9992V18.4992H9.5L12 20.9992Z" fill="#F0A719"/>
</g>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function SunIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={20} height={20} fill={color} />;
}
