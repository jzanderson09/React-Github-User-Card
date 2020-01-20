import React from 'react';
import { Card }  from 'react-bootstrap';

import './UserCard.css';

const UserCard = props => {
    return (
        <div className='UserCard-container'>
            <Card style={{ width: '100%' }}>
                <Card.Title>User: {props.user.name}</Card.Title>
                <img 
                    src={props.user.avatar_url}
                    className='profile-photo'
                    alt='User Portrait'
                ></img>
                <Card.Link
                    className='github-handle'
                    href={`${props.user.html_url}?tab=repositories`}
                    target='_blank'
                >Github: {props.user.login}</Card.Link>
            </Card>
        </div>
    );
};

export default UserCard;