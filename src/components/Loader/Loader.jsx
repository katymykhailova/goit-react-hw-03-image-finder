import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

const override = css`
  top: 100px;
  left: 0;
  position: sticky;
  z-index: 1200;

  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export default function Loader() {
  return (
    <BarLoader color={'#3f51b5'} loading={true} css={override} size={15} />
  );
}
