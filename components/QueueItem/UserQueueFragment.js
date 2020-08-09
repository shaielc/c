import React from 'react';
import StyledButton from '../StyledButton';

export default ({ item, session, onRemoveItem, onVote }) => {
  const voteUp =
    item.voters && session.user ? (
      item.voters.filter(v => v && v.id === session.user.id).length === 0 ? (
        <StyledButton onClick={onVote}>▲</StyledButton>
      ) : (
        <StyledButton onClick={onVote} active={true}>
          ▲
        </StyledButton>
      )
    ) : null;
  return (
    <React.Fragment>
      <td style={{ paddingRight: '10px' }}>{item.user && (item.user.display_name || item.user.id)}</td>
      <td>
        {item.user && session.user && item.user.id === session.user.id ? (
          <StyledButton
            onClick={() => {
              onRemoveItem(item.id);
            }}
          >
            X
          </StyledButton>
        ) : (
          voteUp
        )}
      </td>
      <td>
        {item.voters && item.voters.length > 0 ? (
          <span>{item.voters.length === 1 ? '1 vote' : item.voters.length + ' votes'}</span>
        ) : (
          ''
        )}
      </td>
    </React.Fragment>
  );
};
