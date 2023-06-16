import { CSSProperties } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const color = '#f38e82';

const override: CSSProperties = {
  margin: '0 auto',
};

const Spinner = () => {
  return (
    <div className="spinner">
      <BounceLoader color={color} size={80} cssOverride={override} />
    </div>
  );
};

export default Spinner;
