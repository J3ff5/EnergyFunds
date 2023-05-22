import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1873 17.7292H23.5623V11.3542H21.4373V15.6042H17.1873V17.7292ZM4.43734 10.6458H6.56234V6.39583H10.8123V4.27083H4.43734V10.6458ZM3.0915 21.625C2.38317 21.625 1.78109 21.3771 1.28525 20.8813C0.789421 20.3854 0.541504 19.7833 0.541504 19.075V2.925C0.541504 2.21667 0.789421 1.61458 1.28525 1.11875C1.78109 0.622917 2.38317 0.375 3.0915 0.375H24.9082C25.6165 0.375 26.2186 0.622917 26.7144 1.11875C27.2103 1.61458 27.4582 2.21667 27.4582 2.925V19.075C27.4582 19.7833 27.2103 20.3854 26.7144 20.8813C26.2186 21.3771 25.6165 21.625 24.9082 21.625H3.0915ZM3.0915 19.5H24.9082C25.0026 19.5 25.0971 19.4528 25.1915 19.3583C25.2859 19.2639 25.3332 19.1694 25.3332 19.075V2.925C25.3332 2.83056 25.2859 2.73611 25.1915 2.64167C25.0971 2.54722 25.0026 2.5 24.9082 2.5H3.0915C2.99706 2.5 2.90261 2.54722 2.80817 2.64167C2.71373 2.73611 2.6665 2.83056 2.6665 2.925V19.075C2.6665 19.1694 2.71373 19.2639 2.80817 19.3583C2.90261 19.4528 2.99706 19.5 3.0915 19.5Z" fill="#161616"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function AspectRatioIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
