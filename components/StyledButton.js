import React from 'react';

export default props => {
  const className = props.className ? 'btn btn--styled ' + props.className : 'btn btn--styled';
  return <button {...props} className={className}></button>;
};
