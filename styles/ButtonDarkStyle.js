import css from 'styled-jsx/css';

export default css`
  :global(.btn--styled) {
    background-color: #bbc8d5;
    border: 1px solid #bbc8d5;
    color: #333;
  }
  :global(.btn--styled:hover) {
    background-color: #424d58;
    border-color: #424d58;
    color: #fff;
  }
  :global(.btn--styled.active) {
    background-color: #424d58;
    border-color: #424d58;
    color: #fff;
  }
`;
