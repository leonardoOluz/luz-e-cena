import styles from "./Banner.module.css";
type IProps = {
  src: string;
  alt: string;
}
function Banner({ src, alt }: IProps) {
  return <img src={src} alt={alt} className={styles.banner} />;
}

export default Banner;
