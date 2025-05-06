import styles from "./Fieldset.module.css";

interface FieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant?: "primary" | "secondary";
}
const Fieldset = ({ children, variant = "primary" }: FieldsetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${styles[variant]}`}>
      {children}
    </fieldset>
  );
};

export default Fieldset;
