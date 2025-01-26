import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const [searchBarDivStyles, setSearchBarDivStyles] = useState({});
  const [searchIconStyles, setSearchIconStyles] = useState({});

  const onFocusHanlder = () => {
    setSearchBarDivStyles({
      boxShadow: "0 0 0 2px #dbdbdb inset",
      backgroundColor: "#2a2a2a"
    });
    setSearchIconStyles({
      color: "#e0e0e0"
    })
  };

  const onBlurHandler = () => {
    setSearchBarDivStyles({});
    setSearchIconStyles({});
  };

  const onSearchClick = () => {
    if (props.input === '') {
      document.getElementById('searchBar').focus();
    }
  }

  const onXMarkClick = () => {
    props.onInputClear();
    document.getElementById('searchBar').focus();
  };

  return (
    <form onSubmit={props.fetchTracks} id='searchForm' className={styles.searchBarForm} autoComplete='off'>
      <label className={styles.searchLabel}>Create your Spotify playlist</label>
      <div className={styles.searchBarButtonContainer}>
        <div style={searchBarDivStyles} className={styles.searchBarDiv}>
          <button type='submit' className={styles.searchButton}>
            <i title='Search' onClick={onSearchClick} style={searchIconStyles} className={"fa-solid fa-magnifying-glass fa-lg " + styles.searchIcon}></i>
          </button>
          <input className={styles.searchBar}
            onFocus={onFocusHanlder}
            onBlur={onBlurHandler}
            onChange={props.onInputChange}
            value={props.input}
            type='text'
            id='searchBar'
            name='searchBar'
            placeholder='What do you want to play?'
          ></input>
          {props.input === '' ? (
            <i title='Clear input field' className={"fa-solid fa-x fa-lg " + styles.xMarkHidden}></i>
          ) : (
            <i title='Clear input field' className={"fa-solid fa-x fa-lg " + styles.xMark} onClick={onXMarkClick}></i>
          )
          }
        </div>
        {/* <input className='btn' type='submit' value='Search'></input> */}
      </div>
    </form >
  );
}


SearchBar.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputClear: PropTypes.func.isRequired,
};

export default SearchBar;