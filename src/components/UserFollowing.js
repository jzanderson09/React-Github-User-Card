import React from 'react';
import { Card } from 'react-bootstrap';
import './UserFollowing.css';

const UserFollowing = props => {
    return (
        <div className='UserFollowing-container'>
                        <h1>{`Following (${props.followingCount}):`}</h1>
            {props.following.map(followingUser => {
                return (
                    <div 
                        className='user-following' 
                        key={followingUser.id}
                        onClick={() => props.changeUser(followingUser.login)}
                    >
                        <Card 
                            style={{ width: '18rem' }}
                        >
                            <img 
                                src={followingUser.avatar_url}
                                className='thumbnail'
                                alt='user profile thumbnail'
                            ></img>
                            Github: 
                            <Card.Link
                                className='follower-link'
                                href={followingUser.html_url}
                                target='_blank'
                            >{followingUser.login}</Card.Link>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default UserFollowing;