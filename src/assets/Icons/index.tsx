import React from 'react';

import {IHashIcons, IIconsProps} from 'assets/Icons/Icons.structure';

import AccountBalanceIcon from './AccountBalanceIcon';
import ArrowDownIcon from './ArrowDown';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import AspectRatioIcon from './AspectRatio';
import BulletListIcon from './BulletListIcon';
import BulletOptionIcon from './BulletOptionIcon';
import CalendarIcon from './CalendarIcon';
import CheckIcon from './CheckIcon';
import ClaroLogo from './claroLogo';
import CloseEyeIcon from './CloseEyeIcon';
import CloseIcon from './CloseIcon';
import CopyIcon from './CopyIcon';
import CreditCardIcon from './CreditCardIcon';
import DemographyIcon from './DemographyIcon';
import DocumentScannerIcon from './DocumentScanner';
import DollarIcon from './DollarIcon';
import DraftIcon from './Draft';
import EditIcon from './EditIcon';
import EmailIcon from './EmailIcon';
import ErrorIcon from './ErrorIcon';
import EyeGlassesIcon from './EyeGlasses';
import FamiliarFaceIcon from './FamiliarFace';
import FlareIcon from './Flare';
import HelpOutline from './HelpOutline';
import HomeIcon from './HomeIcon';
import KeyIcon from './KeyIcon';
import MonetizationIcon from './MonetizationIcon';
import MoneyIcon from './MoneyIcon';
import MoodIcon from './Mood';
import MoonIcon from './MoonIcon';
import OpenEyeIcon from './OpenEyeIcon';
import PhoneIcon from './PhoneIcon';
import PixIcon from './PixIcon';
import PlusIcon from './PlusIcon';
import QRCodeIcon from './QRCodeIcon';
import RandomIcon from './RandomIcon';
import RoundedChangeIcon from './RoundedChangeIcon';
import RoundedPlusIcon from './RoundedPlusIcon';
import SearchIcon from './SearchIcon';
import ShareIcon from './ShareIcon';
import ShopIcon from './ShopIcon';
import SunIcon from './SunIcon';
import TipIcon from './TipIcon';
import TipIconOutside from './TipIconOutside';
import TrashIcon from './TrashIcon';
import WaterDropIcon from './WaterDropIcon';
import UserIcon from './UserIcon';
import NotificationIcon from './NotificationIcon';
import TopRightArrowIcon from './TopRightArrowIcon';
import BottomRightArrowIcon from './BottomRightArrowIcon';
import WindIcon from './WindIcon';
import LeafIcon from './LeafIcon';

/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name="arrow-down" size={20} color="#000" />
 * ````
 *
 * ### Available icons:
 * - arrow-down     | • error           | • tip                  | • rounded-plus         | • moon
 * - arrow-left     | • home            | • tip-outside          | • plus
 * - bullet-list    | • key             | • demography           | • email
 * - calendar       | • monetization    | • arrow-right          | • phone
 * - check          | • money           | • flare                 | • random
 * - close-eye      | • open-eye        | • mood                 | • rounded-change
 * - close          | • pix             | • eye-glasses          | • bullet-option
 * - copy           | • qr-code         | • familiar-face        | • share
 * - credit-card    | • search          | • document-scanner     | • bulletList-icon
 * - dollar         | • shop            | • draft                | • help-outline
 * - aspect-ratio   | • water-drop      | • edit                 | • sun
 *
 * @param size - size of icon
 * @param color - color of icon
 * @param name - name of icon
 */
export default function Icons({size, color, name}: IIconsProps) {
  const iconsProps = {
    size,
    color,
  };

  const HashIcons: IHashIcons = {
    'bulletList-icon': <BulletListIcon {...iconsProps} />,
    'help-outline': <HelpOutline {...iconsProps} />,
    'claro-logo': <ClaroLogo {...iconsProps} />,
    'account-balance': <AccountBalanceIcon {...iconsProps} />,
    'arrow-down': <ArrowDownIcon {...iconsProps} />,
    'arrow-left': <ArrowLeft {...iconsProps} />,
    'arrow-right': <ArrowRight {...iconsProps} />,
    'aspect-ratio': <AspectRatioIcon {...iconsProps} />,
    'bullet-list': <BulletListIcon {...iconsProps} />,
    'rounded-plus': <RoundedPlusIcon {...iconsProps} />,
    'rounded-change': <RoundedChangeIcon {...iconsProps} />,
    calendar: <CalendarIcon {...iconsProps} />,
    trash: <TrashIcon {...iconsProps} />,
    check: <CheckIcon {...iconsProps} />,
    'close-eye': <CloseEyeIcon {...iconsProps} />,
    close: <CloseIcon {...iconsProps} />,
    copy: <CopyIcon {...iconsProps} />,
    'credit-card': <CreditCardIcon {...iconsProps} />,
    'document-scanner': <DocumentScannerIcon {...iconsProps} />,
    dollar: <DollarIcon {...iconsProps} />,
    draft: <DraftIcon {...iconsProps} />,
    error: <ErrorIcon {...iconsProps} />,
    edit: <EditIcon {...iconsProps} />,
    'eye-glasses': <EyeGlassesIcon {...iconsProps} />,
    'familiar-face': <FamiliarFaceIcon {...iconsProps} />,
    flare: <FlareIcon {...iconsProps} />,
    home: <HomeIcon {...iconsProps} />,
    key: <KeyIcon {...iconsProps} />,
    monetization: <MonetizationIcon {...iconsProps} />,
    money: <MoneyIcon {...iconsProps} />,
    mood: <MoodIcon {...iconsProps} />,
    'open-eye': <OpenEyeIcon {...iconsProps} />,
    pix: <PixIcon {...iconsProps} />,
    'qr-code': <QRCodeIcon {...iconsProps} />,
    search: <SearchIcon {...iconsProps} />,
    shop: <ShopIcon {...iconsProps} />,
    tip: <TipIcon {...iconsProps} />,
    'tip-outside': <TipIconOutside {...iconsProps} />,
    demography: <DemographyIcon {...iconsProps} />,
    plus: <PlusIcon {...iconsProps} />,
    email: <EmailIcon {...iconsProps} />,
    phone: <PhoneIcon {...iconsProps} />,
    random: <RandomIcon {...iconsProps} />,
    'bullet-option': <BulletOptionIcon {...iconsProps} />,
    share: <ShareIcon {...iconsProps} />,
    'water-drop': <WaterDropIcon {...iconsProps} />,
    sun: <SunIcon {...iconsProps} />,
    moon: <MoonIcon {...iconsProps} />,
    user: <UserIcon {...iconsProps} />,
    notification: <NotificationIcon {...iconsProps} />,
    'top-right-arrow': <TopRightArrowIcon {...iconsProps} />,
    'bottom-right-arrow': <BottomRightArrowIcon {...iconsProps} />,
    wind: <WindIcon {...iconsProps} />,
    leaf: <LeafIcon {...iconsProps} />,
  };

  return HashIcons[name] || null;
}
