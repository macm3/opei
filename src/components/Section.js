import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

export default class Section extends Component{
    render(){
        return(
            <Container style={{marginTop: '4em', fontSize: '20px'}}>
                <Header size="huge" dividing textAlign="center">{this.props.title}</Header>
                <br/>
                {this.props.children}
            </Container>
        );
    }
}