import { useState } from 'react';
import styles from "./styles.module.scss"

type CheckBoxProps = {
  label?: string;
};

export function Checkbox({ label }: CheckBoxProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.checkboxContainer}>
      <label>
        <input
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