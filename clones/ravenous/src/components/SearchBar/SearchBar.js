import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleSearch(event);
    }
  };

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(sortByOption, event) {
    this.setState({
      sortBy: sortByOption,
    });
    // this.handleSearch();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
            onKeyDown={this.handleKeyDown}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Eat</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
