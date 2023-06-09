import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.96875 0C6.86133 0 6 0.904297 6 2H7C7 1.38477 7.36523 1 7.96875 1C8.5625 1 9 1.4375 9 2.03125C9 2.625 8.58398 3 7.96875 3H0V4H7.96875C9.06445 4 10 3.14844 10 2.03125C10 0.914062 9.08594 0 7.96875 0ZM0 5.5V6.5H9.75C10.4453 6.5 11 7.05469 11 7.75C11 8.44531 10.4453 9 9.75 9C9.37891 9 9.08984 8.88086 8.875 8.65625C8.66016 8.43164 8.5 8.07812 8.5 7.5H7.5C7.5 8.27148 7.73633 8.9043 8.15625 9.34375C8.57617 9.7832 9.1543 10 9.75 10C10.9863 10 12 8.98633 12 7.75C12 6.51367 10.9863 5.5 9.75 5.5H0ZM0 8V9H3.96875C4.57422 9 5 9.40625 5 10C5 10.6035 4.60352 11 4 11C3.39648 11 3 10.6035 3 10H2C2 11.1074 2.89258 12 4 12C5.10742 12 6 11.1074 6 10C6 8.88281 5.07617 8 3.96875 8H0Z" fill="#4A88D0"/>
</svg>
`;

interface IProps {
  size?: number;
  color?: string;
}

export default function WindIcon(props: IProps): JSX.Element {
  return <SvgXml xml={xml} width={props.size} height={props.size} />;
}
