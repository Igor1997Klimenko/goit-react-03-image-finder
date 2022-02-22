import { Component } from "react";
import search from '../search.svg'
import '../App.css';
class SearchBar extends Component {
    render() {
        const { onSubmit, onChange, value } = this.props;
        return (
        <header className="Searchbar">
            <form className="Form" onSubmit={onSubmit}>
                <button type="submit" className="Button">
                        <img className="Button-label" src={search} alt="" />
                </button>

                <input
                    value={value}
                    name="query"
                    className="Input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onChange}
                />
            </form>
        </header>
    )
}
}

export default SearchBar;