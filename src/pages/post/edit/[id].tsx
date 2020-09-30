import { withUrqlClient } from 'next-urql';
import React from 'react';
import { createUrqlClient } from '../../../utils/createUrqlClient';

const EditPost: React.FC = () => {
  return <div>Hello</div>;
};

export default withUrqlClient(createUrqlClient)(EditPost);
