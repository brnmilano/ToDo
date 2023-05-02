import { useState } from 'react';
import styles from "./styles.module.scss"

type CheckBoxProps = {
  label?: string;
};

export function Checkbox({ label, ...rest }: CheckBoxProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.checkboxContainer}>
      <label>
        <input
          {...rest}
          className={styles.checkboxInput}
          type="checkbox"
          checked={selected}
          onChange={handleClick}
        />
        {label}
      </label>
    </div>
  );
}