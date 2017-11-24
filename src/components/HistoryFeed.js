import React, {Component} from 'react';
import HistoryCard from './HistoryCard';
import {Grid, Icon, Card, Header} from 'semantic-ui-react';

export default class HistoryFeed extends Component{
    render(){
        return(
          <Grid columns={2} divided>
						<Grid.Row>
							<Grid.Column textAlign="right">
								<Icon name="flag checkered" size="huge" flipped='horizontally'></Icon>
							</Grid.Column>
							<Grid.Column>
								<HistoryCard align='left' year='2015' people={50} schools={4}></HistoryCard>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column floated='right'>
								<HistoryCard align='right' year='2016' people={256} schools={13}></HistoryCard>
							</Grid.Column>
							<Grid.Column floated='left'>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
							</Grid.Column>
							<Grid.Column>
								<HistoryCard align='left' year='2017' people={512} schools={25}></HistoryCard>
							</Grid.Column>
						</Grid.Row>
					</Grid>
        );
    }
}