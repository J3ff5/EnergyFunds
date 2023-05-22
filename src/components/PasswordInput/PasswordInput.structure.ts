export interface IPasswordInputProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry: boolean;
  errorMessage?: string;
  onChange: (value: string) => void;
  onToggleSecureTextEntry: () => void;
}
