export interface ICheckBoxProps {
  label?: string | React.ReactNode;
  isChecked: boolean;
  isDisabled?: boolean;
  onPress: () => void;
  onTipPress?: () => void;
}
