import React, {Component} from 'react';
import './Footer.css'

class FooterComponent extends Component {
    render() {
        const { auth } = this.props;
        return (
            <>
                <footer className="page-footer font-small blue bg-yellow" hidden={!auth}>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> KedaiMakan</a>
                    </div>
                </footer>
            </>
        );
    }
}

export default FooterComponent;