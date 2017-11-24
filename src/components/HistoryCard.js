import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

export default class HistoryCard extends Component{
    render(){
      return(
        <Card>
            <Card.Content textAlign={this.props.align}>
                <Card.Header>{this.props.year}</Card.Header>
                <Card.Meta>Participantes</Card.Meta>
                <Card.Description>{this.props.people} Inscritos</Card.Description>
                <Card.Meta>Escolas</Card.Meta>
                <Card.Description>{this.props.schools} Participantes</Card.Description>
            </Card.Content>
        </Card>
      );
    }
}