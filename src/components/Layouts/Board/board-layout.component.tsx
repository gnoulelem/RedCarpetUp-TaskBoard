import React from 'react';
import { Header } from 'components';

import './board-layout.styles.scss';

type BoardLayoutProps = {
  children: any;
};

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="board-layout">{children}</div>
    </>
  );
};

export default BoardLayout;
