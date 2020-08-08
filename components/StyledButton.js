import React from 'react';

export default props => {
  let className = props.className ? 'btn btn--styled ' + props.className : 'btn btn--styled';
  if (props.active) {
    className += ' active';
  }
  return <button {...props} className={className}></button>;
};
