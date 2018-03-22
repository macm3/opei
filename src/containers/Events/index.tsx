import * as React from 'react';
import { Card, FlatButton, CardText } from 'material-ui';
import { CardTitle, CardActions } from 'material-ui/Card';
// import { CardText } from 'material-ui/Card/CardText';
import './index.css';

const events = [
    {
        description: 'Inscrição delegados',
        when: '19/03 - 18/04',
        link: 'http://opei.cin.ufpe.br/2018'
    },
    {
        description: 'Retardatários delegados',
        when: '26/04 - 27/04',
        link: null,
    },
    {
        description: 'Inscrições alunos',
        when: '02/05 - 31/07',
        link: null
    },
    {
        description: 'Retardatários alunos',
        when: '08/08 - 10/08 ',
        link: null
    },
    {
        description: 'Data da prova',
        when: '15/09',
        link: null
    },
    {
        description: 'Contestamento de questões',
        when: '16/09 - 22/09',
        link: null
    },
    {
        description: 'Cerimônia',
        when: '05/10',
        link: null
    },
];

class Events extends React.Component {
    cardLink = (value) => {
        return (
            <Card>
                <CardText 
                    style={{
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        lineHeight: '2rem',
                        color: '#222',
                    }}
                >
                    <span 
                        style={{
                            textAlign: 'super',
                            fontWeight: 400,
                        }}
                    >
                        {value.description}
                    </span>
                    <br/><i className="material-icons">event</i>
                    <span 
                        style={{
                            textAlign: 'super',
                            fontWeight: 400,
                        }}
                    >
                        &nbsp;{value.when}
                    </span>
                </CardText>
                <CardActions>
                    <FlatButton 
                        label="Inscrever-se" 
                        backgroundColor="#777"
                        style={{color: 'white', borderRadius: '10px'}}
                        hoverColor="#999"
                        target="_blank"
                        href={value.link}
                    />
                </CardActions>
            </Card>
        );
    }

    cardSimple = (value) => {
        return (
            <Card>
                <CardText 
                    style={{
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        lineHeight: '2rem',
                        color: '#222',
                    }}
                >
                    <span 
                        style={{
                            textAlign: 'super',
                            fontWeight: 400,
                        }}
                    >
                        {value.description}
                    </span>
                    <br/>
                    <i className="material-icons">event</i>
                    <span 
                        style={{
                            textAlign: 'super',
                        }}
                    >
                        &nbsp;{value.when}
                    </span>
                </CardText>
            </Card>
        );
    }

    render() {
        return (
            <div id="events" className="Events">
                <Card>
                    <CardTitle
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            lineHeight: '2rem',
                            color: '#222',
                            verticalAlign: 'super',
                        }}
                    >
                        Cronograma
                    </CardTitle>
                    {events.map(value => { 
                       return value.link ? this.cardLink(value) : this.cardSimple(value);
                    })};
                </Card>
            </div>
        );
    }
}

export default Events;