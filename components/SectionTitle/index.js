import React from 'react'
import Divider from '../Divider';

const SectionTitle = ({ data }) => {
  return (
    <React.Fragment>
      <h2 className="text-2xl font-bold">{data}</h2>
      <Divider />
    </React.Fragment>
  );
}

export default SectionTitle