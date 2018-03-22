import * as React from 'react';
import './index.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div> 
                    <div className="w3-row">
                        <div className="w3-col w3-container m8 l8">
                            <div 
                                className="mui--text-body1" 
                                style={{
                                    textAlign: 'left',
                                    marginBottom: 10,
                                }}
                            >
                                © 2018 OPEI - Todos os direitos reservados 
                            </div> 
                        </div>
                        <div className="w3-col w3-container m4 l4"/>
                    </div>
                </div>                    
            </footer>
        );
    }
}

export default Footer;