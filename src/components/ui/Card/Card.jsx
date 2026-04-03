import clsx from 'clsx';
import styles from './Card.module.css'; // Обов'язково import styles from ...

export default function Card({ children, hoverable, className, ...rest }) {
  return (
    // Тут ми беремо клас .card саме з об'єкта styles
    <div className={clsx(styles.card, hoverable && styles.hoverable, className)} {...rest}>
      {children}
    </div>
  );
}

Card.Body = function CardBody({ children, className }) {
  return <div className={clsx(styles.body, className)}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className }) {
  return <div className={clsx(styles.footer, className)}>{children}</div>;
};