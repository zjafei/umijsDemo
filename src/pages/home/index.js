import styles from './styles.less'

export default function() {
  return (
    <>
      <h1 className={styles.header}>this is home page!</h1>
      <h2>{process.THIS_IS_A_TEST_DEFINE}</h2>
    </>
  );
}
