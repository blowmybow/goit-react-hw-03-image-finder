import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements.searchName.value.trim();
    this.props.onSubmit(form);
    e.target.reset();
  };
  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}
SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
