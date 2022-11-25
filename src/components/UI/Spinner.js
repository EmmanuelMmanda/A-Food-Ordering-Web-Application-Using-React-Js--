import styles from "./Spinner.module.css";
const Spinner = (props) => {
  return <div className={styles.Spinner}>
    <div id="loading" className={styles.loading}></div>
    {props.spinnertext}
  </div>;
};

export default Spinner;
