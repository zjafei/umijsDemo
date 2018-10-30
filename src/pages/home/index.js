import styles from './styles.less';
import Tsdemo from '../../components/Tsdemo';

export default function() {
  return (
    <>
      <h1 className={styles.header}>this is home page!</h1>
      <h2>{THIS_IS_A_TEST_DEFINE}</h2>
      <Tsdemo text={undefined}/>
    </>
  );
}
