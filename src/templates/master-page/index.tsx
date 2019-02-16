import React, { FunctionComponent } from 'react';

interface IProps {
  children?: any;
}

const MasterPage: FunctionComponent<IProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default MasterPage;
