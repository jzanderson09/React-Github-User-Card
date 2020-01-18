import React from 'react';
import { Card } from 'react-bootstrap';

const UserFollowers = props => {
    return (
        <div className='UserFollowers-container'>
            <h1>UserFollowers Component!</h1>
            {props.followers.map(follower => {
                return (
                    <div className='follower'>
                        <Card style={{ width: '2rem' }}>
                            <Card.Link
                                href={follower.html_url}
                                target='_blank'
                            >
                            {follower.login}</Card.Link>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default UserFollowers;