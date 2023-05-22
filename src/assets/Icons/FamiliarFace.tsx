import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 25.625C12.025 25.625 9.51042 24.5979 7.45625 22.5438C5.40208 20.4896 4.375 17.975 4.375 15C4.375 12.025 5.40208 9.51042 7.45625 7.45625C9.51042 5.40208 12.025 4.375 15 4.375C17.975 4.375 20.4896 5.40208 22.5438 7.45625C24.5979 9.51042 25.625 12.025 25.625 15C25.625 17.975 24.5979 20.4896 22.5438 22.5438C20.4896 24.5979 17.975 25.625 15 25.625ZM15 23.5C17.3611 23.5 19.3681 22.6736 21.0208 21.0208C22.6736 19.3681 23.5 17.3611 23.5 15C23.5 14.5986 23.4707 14.1972 23.4122 13.7958C23.3527 13.3944 23.2639 13.0049 23.1458 12.6271C22.7917 12.7215 22.4318 12.7862 22.0663 12.8212C21.6999 12.8571 21.3278 12.875 20.95 12.875C19.4153 12.875 17.9575 12.5681 16.5767 11.9542C15.195 11.3403 13.9847 10.4549 12.9458 9.29792C12.3319 10.6674 11.4645 11.8536 10.3434 12.8566C9.22142 13.8605 7.94028 14.5986 6.5 15.0708C6.54722 17.4083 7.39156 19.3973 9.033 21.0378C10.6735 22.6793 12.6625 23.5 15 23.5ZM6.88958 12.6271C7.97569 12.1076 8.90267 11.4111 9.6705 10.5375C10.4374 9.66389 11.0215 8.58958 11.4229 7.31458C10.3132 7.81042 9.36308 8.51875 8.57258 9.43958C7.78114 10.3604 7.22014 11.4229 6.88958 12.6271ZM11.6 17.6562C11.1986 17.6562 10.8681 17.5264 10.6083 17.2667C10.3486 17.0069 10.2187 16.6764 10.2187 16.275C10.2187 15.8972 10.3486 15.5723 10.6083 15.3003C10.8681 15.0293 11.1986 14.8937 11.6 14.8937C11.9778 14.8937 12.3027 15.0293 12.5747 15.3003C12.8457 15.5723 12.9812 15.8972 12.9812 16.275C12.9812 16.6764 12.8457 17.0069 12.5747 17.2667C12.3027 17.5264 11.9778 17.6562 11.6 17.6562ZM20.95 10.75C21.1861 10.75 21.4047 10.7443 21.6059 10.733C21.8061 10.7207 22.0125 10.691 22.225 10.6437C21.4931 9.36875 20.4839 8.35914 19.1976 7.61492C17.9103 6.87164 16.5111 6.5 15 6.5C14.7403 6.5 14.4924 6.51181 14.2563 6.53542C14.0201 6.55903 13.784 6.59444 13.5479 6.64167C14.4451 7.9875 15.5194 9.00844 16.7708 9.7045C18.0222 10.4015 19.4153 10.75 20.95 10.75ZM18.4 17.6562C18.0222 17.6562 17.6978 17.5264 17.4267 17.2667C17.1547 17.0069 17.0187 16.6764 17.0187 16.275C17.0187 15.8972 17.1547 15.5723 17.4267 15.3003C17.6978 15.0293 18.0222 14.8937 18.4 14.8937C18.8014 14.8937 19.1381 15.0293 19.4101 15.3003C19.6811 15.5723 19.8167 15.8972 19.8167 16.275C19.8167 16.6764 19.6811 17.0069 19.4101 17.2667C19.1381 17.5264 18.8014 17.6562 18.4 17.6562ZM0.125 6.5V2.675C0.125 1.96667 0.372917 1.36458 0.86875 0.86875C1.36458 0.372917 1.96667 0.125 2.675 0.125H6.5V2.25H2.675C2.58056 2.25 2.48611 2.29722 2.39167 2.39167C2.29722 2.48611 2.25 2.58056 2.25 2.675V6.5H0.125ZM6.5 29.875H2.675C1.96667 29.875 1.36458 29.6271 0.86875 29.1312C0.372917 28.6354 0.125 28.0333 0.125 27.325V23.5H2.25V27.325C2.25 27.4194 2.29722 27.5139 2.39167 27.6083C2.48611 27.7028 2.58056 27.75 2.675 27.75H6.5V29.875ZM23.5 29.875V27.75H27.325C27.4194 27.75 27.5139 27.7028 27.6083 27.6083C27.7028 27.5139 27.75 27.4194 27.75 27.325V23.5H29.875V27.325C29.875 28.0333 29.6271 28.6354 29.1312 29.1312C28.6354 29.6271 28.0333 29.875 27.325 29.875H23.5ZM27.75 6.5V2.675C27.75 2.58056 27.7028 2.48611 27.6083 2.39167C27.5139 2.29722 27.4194 2.25 27.325 2.25H23.5V0.125H27.325C28.0333 0.125 28.6354 0.372917 29.1312 0.86875C29.6271 1.36458 29.875 1.96667 29.875 2.675V6.5H27.75Z" fill="#161616"/>
</svg>
`;

interface IProps {
  size?: number;
  color: string;
}

export default function FamiliarFaceIcon({size, color}: IProps) {
  return <SvgXml xml={xml} width={size} height={size} fill={color} />;
}