import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <p className="copyright">
      This project design was copied from{' '}
      <Link
        className="twitter-link"
        to={'https://twitter.com/jonasschmedtman'}
      >
        Jonas Schmedtmann
      </Link>{' '}
      in his vannila Javascript course on udemy.And rebuilt using
      react by{' '}
      <Link
        className="twitter-link"
        to={'https://twitter.com/_janerm'}
      >
        Musa Abdulkabir
      </Link>
    </p>
  );
};

export default Copyright;
