import styles from './styles.less';

function BasicLayout(props) {
  return (
    <div>
      <h1 className={styles.homeLayout}>this is home layout!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
