import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3657_24895" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_3657_24895)">
<path d="M12 21.5C9.5 21.5 7.375 20.625 5.625 18.875C3.875 17.125 3 15 3 12.5C3 10 3.875 7.875 5.625 6.125C7.375 4.375 9.5 3.5 12 3.5C12.2333 3.5 12.4625 3.50833 12.6875 3.525C12.9125 3.54167 13.1333 3.56667 13.35 3.6C12.6667 4.08333 12.1208 4.7125 11.7125 5.4875C11.3042 6.2625 11.1 7.1 11.1 8C11.1 9.5 11.625 10.775 12.675 11.825C13.725 12.875 15 13.4 16.5 13.4C17.4167 13.4 18.2583 13.1958 19.025 12.7875C19.7917 12.3792 20.4167 11.8333 20.9 11.15C20.9333 11.3667 20.9583 11.5875 20.975 11.8125C20.9917 12.0375 21 12.2667 21 12.5C21 15 20.125 17.125 18.375 18.875C16.625 20.625 14.5 21.5 12 21.5ZM12 19.5C13.4667 19.5 14.7833 19.0958 15.95 18.2875C17.1167 17.4792 17.9667 16.425 18.5 15.125C18.1667 15.2083 17.8333 15.275 17.5 15.325C17.1667 15.375 16.8333 15.4 16.5 15.4C14.45 15.4 12.7042 14.6792 11.2625 13.2375C9.82083 11.7958 9.1 10.05 9.1 8C9.1 7.66667 9.125 7.33333 9.175 7C9.225 6.66667 9.29167 6.33333 9.375 6C8.075 6.53333 7.02083 7.38333 6.2125 8.55C5.40417 9.71667 5 11.0333 5 12.5C5 14.4333 5.68333 16.0833 7.05 17.45C8.41667 18.8167 10.0667 19.5 12 19.5Z"/>
</g>
</svg>

`;

interface IProps {
  size?: number;
  color: string;
}

export default function MoonIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
