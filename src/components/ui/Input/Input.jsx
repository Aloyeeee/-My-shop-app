import styles from './Input.module.css';

export default function Input({ label, ...rest }) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...rest} />
    </div>
  );
}