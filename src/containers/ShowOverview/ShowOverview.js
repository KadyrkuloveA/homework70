import React, {useEffect, useState} from 'react';
import {getShowInf} from "../../store/actions/actionSeries";
import {connect} from "react-redux";

const ShowOverview = (props) => {

    useEffect(() => {
        props.getShowInf(props.match.params.id);
        //eslint-disable-next-line
    }, [props.match.params.id]);


    return (
        <div className="card mt-4" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.show.image} className="card-img" alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.show.name} <span className="badge badge-pill badge-secondary">{props.show.rating}</span></h5>
                        <p className="card-text">{props.show.summary}</p>
                        <p className="card-text"><small className="text-muted">{props.show.runtime} min</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    show: state.sr.show
});

const mapDispatchToProps = dispatch => ({
    getShowInf: (id) => dispatch(getShowInf(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowOverview);