import styles from "./index.module.scss";

interface IProps {
  options: any;
  value: any;
  onChange: (val: any) => void;
}

export default function CustomTab({ options, value, onChange }: IProps) {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_content}>
        {options.map((it: any) => {
          return (
            <span
              className={it.value === value ? styles.active : ""}
              key={it.value}
              onClick={() => onChange(it.value)}
            >
              {it.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
