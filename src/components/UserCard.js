import React from 'react';
import { Card }  from 'react-bootstrap';

import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';

const UserCard = props => {
    return (
        <div className='UserCard-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{props.user.name}</Card.Title>
                <img 
                    src={props.user.avatar_url}
                    className='profile-photo'
                    alt='User Portrait'
                ></img>
                <Card.Link 
                    href={`${props.user.html_url}?tab=repositories`}
                    target='_blank'
                >{props.user.login}</Card.Link>
                <UserRepos 
                    repos={props.repos}
                />
                <UserFollowers 
                    followers={props.followers}
                />
            </Card>
        </div>
    );
};

export default UserCard;