import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div className='footer' hidden={!auth}>
                <div className='footer-inner'>
                    <div className='footer-logo'>
                        <img src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="img-kedaiMakan Apps" />
                        <p>Kedai Makan Apps.</p>
                    </div>
                    {/*<ul className='footer-list'>*/}
                    {/*    <li>USER</li>*/}
                    {/*    <li>FOOD</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}

export default FooterComponent;