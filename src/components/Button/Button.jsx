import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';
export const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
