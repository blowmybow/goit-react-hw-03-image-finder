import styled from '@emotion/styled';
export const ButtonLoadMore = styled.button`
  width: 9em;
  height: 3em;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 30em;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #c5c5c5;

  &:hover,
  &:focus {
    color: black;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    box-shadow: none;
  }
`;
