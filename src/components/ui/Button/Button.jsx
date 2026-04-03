import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({ variant = 'primary', size = 'md', className, disabled, children, ...rest }) {
  return (
    <button 
      className={clsx(styles.button, styles[variant], styles[size], className)} 
      disabled={disabled} 
      {...rest}
    >
      {children}
    </button>
  );
}