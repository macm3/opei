import * as React from 'react';
import { Card, FlatButton, CardText } from 'material-ui';
import { CardTitle, CardActions } from 'material-ui/Card';
// import { CardText } from 'material-ui/Card/CardText';
import './index.css';

class Events extends React.Component {
    render() {
        return (
            <div id="events" className="Events">
                <Card>
                    <CardTitle>
                        <i className="material-icons">event</i>
                        <span 
                            style={{
                                fontWeight: 400,
                                fontSize: '1.5rem',
                                lineHeight: '2rem',
                                color: '#222',
                                verticalAlign: 'super',
                            }}
                        >
                            &nbsp;Cronograma
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
                            (19/03 - 18/04) Inscrição
                        </CardText>
                        <CardActions>
                        <FlatButton 
                            label="Inscrever-se" 
                            backgroundColor="#777"
                            style={{color: 'white', borderRadius: '10px'}}
                            hoverColor="#999"
                            target="_blank"
                            href="http://opei.cin.ufpe.br/2018"
                        />
                    </CardActions>
                    </Card>
                    <Card>
                        <CardText 
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (26/04 - 27/04) Retardatários delegados
                        </CardText>
                    </Card>
                    <Card>
                        <CardText
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (02/05 - 31/07) Inscrições alunos
                        </CardText>
                    </Card>
                    <Card>
                        <CardText
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (08/08 - 10/08) Retardatários alunos
                        </CardText>
                    </Card>
                    <Card>
                        <CardText
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (15/09) Data da prova
                        </CardText>
                    </Card>
                    <Card>
                        <CardText
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (16/09 - 22/09) Contestamento de questões
                        </CardText>
                    </Card>
                    <Card>
                        <CardText
                            style={{
                                fontWeight: 400,
                                fontSize: '1.25rem',
                                lineHeight: '2rem',
                                color: '#222',
                            }}
                        >
                            (05/10) Cerimônia 
                        </CardText>
                    </Card>
                </Card>
            </div>
        );
    }
}

export default Events;