import styles from "./SelectorGroup.module.css";
interface SelectorGropProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}
const SelectorGrop = ({ children, icon, ...rest }: SelectorGropProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGrop;
