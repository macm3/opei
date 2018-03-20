import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';
import './index.css';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="Contact">
                <Card>
                    <CardTitle>
                            <span 
                                style={{
                                    fontWeight: 400,
                                    fontSize: '1.5rem',
                                    lineHeight: '2rem',
                                    color: '#222',
                                    verticalAlign: 'super',
                                }}
                            >
                                &nbsp;Contato
                            </span>
                        </CardTitle>
                        <Card>
                        <CardText 
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            <i className="material-icons">email</i>
                            <span>
                                &nbsp;opei@cin.ufpe.br
                            </span>
                           
                        </CardText>
                        <CardText 
                            style={{
                                fontWeight: 400,
                                lineHeight: '2rem',
                                fontSize: '1.25rem',
                                color: '#222',
                            }}
                        >
                            <i 
                                className="fa fa-facebook-official" 
                                style={{
                                    fontSize: '1.5rem',
                                    verticalAlign: 'super',
                                }}
                            />
                            <a 
                                href="https://facebook.com/opeiPET/" 
                                target="_blank"
                            >
                                <span
                                    style={{
                                        verticalAlign: 'super',
                                    }}     
                                >
                                    &nbsp;&nbsp;Facebook
                                </span>
                            </a>
                        </CardText>
                    </Card>
                </Card>
            </div>
        );
    }
}

export default Contact;