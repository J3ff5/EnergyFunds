export interface INameInputProps {
  value: string
  label: string
  placeholder?: string
  errorMessage?: boolean
  isDisabled?: boolean
  onChange: (value: string) => void
}
