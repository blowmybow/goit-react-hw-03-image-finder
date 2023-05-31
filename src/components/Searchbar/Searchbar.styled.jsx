import styled from '@emotion/styled';
export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 30px 0;
  background: linear-gradient(
    250deg,
    rgb(233 219 9 / 98%) 37%,
    rgb(25 138 255 / 98%) 95%
  );
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const SearchInput = styled.input`
  width: 360px;
  height: 30px;
  padding: 5px 5px 5px 15px;
  color: #1c5262;
  background: #f1ebe5;
  font-size: 24px;
  font-weight: 600;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font-size: 16px;
    color: #cccccc;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
  }
`;

export const SearchSpan = styled.span`
  padding: 20px;
`;
