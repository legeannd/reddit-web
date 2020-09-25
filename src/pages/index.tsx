import { withUrqlClient } from 'next-urql';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { createUrqlClient } from '../utils/createUrqlClient';

const Index = () => (
  <>
    <NavBar />
    <div>Hello World</div>
  </>
);

export default withUrqlClient(createUrqlClient)(Index);
