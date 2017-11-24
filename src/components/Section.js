import React, {Component} from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';

export default class Section extends Component{
    render(){
        return(
            <Container text style={{marginTop: '5em', fontSize: '18px'}}>
                <Header size="huge" dividing textAlign="center">
                    {this.props.title}
                  <Icon name={this.props.icon} color="grey"/>
                </Header>
                <br/><br/>
                {this.props.children}
            </Container>
        );
    }
}