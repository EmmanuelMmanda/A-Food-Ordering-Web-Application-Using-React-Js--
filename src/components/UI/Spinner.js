import styles from "./Spinner.module.css";
const Spinner = (props) => {
  console.log(props.isDone);

  return (
    <div className={styles.Spinner}>
      {props.isDone === "Done!" && <span>{props.spinnertext}</span>}
      {props.isDone !== "Done!" && (
        <>
          <div id="loading" className={styles.loading}></div>
          <span>{props.spinnertext}</span>
        </>
      )}
    </div>
  );
};

export default Spinner;
