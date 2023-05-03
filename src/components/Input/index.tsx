import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import InputMask from "react-input-mask";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
  textarea?: boolean;
  mask?: string;
}

export function Input({
  label,
  error,
  errorMessage,
  placeholder,
  value,
  mask,
  type,
  ...rest
}: InputProps) {
  const [inputType, setInputType] = useState<
    HTMLInputTypeAttribute | undefined
  >(type);


  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <InputMask
        {...rest}
        maskChar={null}
        mask={mask ? mask : ""}
        placeholder={placeholder}
        className={`${styles.input} ${error && styles.error}`}
        value={value}
        type={inputType}
      />
      <p
        className={`${styles.errorMessage} ${error && styles.showErrorMessage}`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
