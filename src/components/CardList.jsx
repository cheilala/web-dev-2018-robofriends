import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.robots.map((user,idx) => {
                        return <Card
                            key={this.props.robots[idx].id}
                            id={this.props.robots[idx].id}
                            name={this.props.robots[idx].name}
                            email={this.props.robots[idx].email}
                            />})
                }
            </div>
        );
    }
}