import styled from '@emotion/styled';
export const Item = styled.li`
  border-radius: 8px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
