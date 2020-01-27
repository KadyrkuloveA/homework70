import React, {Component} from 'react';

class FrontPage extends Component {
    render() {
        return (
            <div className="card mt-4 mb-5" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <img src="https://artfiles.alphacoders.com/121/121884.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Info</h5>
                    <p className="card-text">
                        To find the series you need, you need to enter the name of what you are looking for in the search bar, it is on top
                    </p>
                </div>
            </div>
        );
    }
}

export default FrontPage;