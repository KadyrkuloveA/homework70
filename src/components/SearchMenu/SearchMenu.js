import React, {useState, Fragment, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {searchSeries} from "../../store/actions/actionSeries";

const SearchMenu = (props) => {
    const [select, setSelect] = useState(false);
    const [string, setString] = useState('');

    const changeHandler = (event) => {
      setString(event.target.value);
    };

    useEffect(() => {
        props.searchSeries(string);
        //eslint-disable-next-line
    }, [string]);

    const autoComplete = (name) => {
        setString(name);
        setSelect(false);
    };

    return (
        <Fragment>
            <nav className="navbar navbar-light bg-light">
                <NavLink className='navbar-brand' to='/'>Series Searcher</NavLink>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        onChange={changeHandler}
                        value={string}
                        placeholder='search'
                        style={{width: '270px', position: 'relative'}}
                        onFocus={() => setSelect(true)}
                    />
                    {select ? <div className="list-group" style={{position: 'absolute', top: '100%'}}>
                        {Object.keys(props.series).map(show => (
                            <li
                                className="list-group-item list-group-item-action"
                                key={props.series[show].show.id}
                                style={{width: '270px', padding: '6px 10px', zIndex: 100}}
                            >
                                <NavLink
                                    className='text-secondary'
                                    to={`/shows/${props.series[show].show.id}`}
                                    onClick={() => autoComplete(props.series[show].show.name)}>
                                    {props.series[show].show.name}
                                </NavLink>
                            </li>
                        ))}
                    </div> : null}
                </form>
            </nav>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    series: state.sr.series
});

const mapDispatchToProps = dispatch => ({
    searchSeries: (string) => dispatch(searchSeries(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);