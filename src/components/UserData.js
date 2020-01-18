import React from 'react';
import { Card }  from 'react-bootstrap';

const UserData = props => {
    return (
        <div className='myUserData-container'>
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
            </Card>
        </div>
    );
};

export default UserData;