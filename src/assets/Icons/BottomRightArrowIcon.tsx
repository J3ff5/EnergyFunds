import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.72689 8.70591L8.72689 2.8732L7.48946 2.8732L7.48946 6.64351L1.68575 0.839804L0.860792 1.66476L6.6645 7.46847L2.89418 7.46847V8.70591L8.72689 8.70591Z" />
</svg>
`;

interface IProps {
  size?: number;
  color?: string;
}

export default function BottomRightArrowIcon({
  size,
  color,
}: IProps): JSX.Element {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}
