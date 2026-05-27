import styles from './styles.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ text, onClick, type = "button" }: ButtonProps) {
  return (
    <button 
      className={styles.container} 
      onClick={onClick} 
      type={type}
    >
      {text}
    </button>
  );
}