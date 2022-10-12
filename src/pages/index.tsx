import type { NextPage } from 'next';
import Styles from 'styles/test.module.scss';

const Home: NextPage = () => {
  return <div className={Styles.test}>Hej</div>;
};

export default Home;
