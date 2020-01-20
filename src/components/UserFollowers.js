import React from 'react';
import { Card } from 'react-bootstrap';
import './UserFollowers.scss';

const UserFollowers = props => {
    return (
        <div className='UserFollowers-container'>
            <h1>{`Followers (${props.followerCount}):`}</h1>
            {props.followers.map(follower => {
                return (
                    <div 
                        className='follower' 
                        key={follower.id}
                        onClick={() => props.changeUser(follower.login)}
                    >
                        <Card 
                            style={{ width: '18rem' }}
                        >
                            <img 
                                src={follower.avatar_url}
                                className='thumbnail'
                                alt='user profile thumbnail'
                            ></img>
                            Github: 
                            <Card.Link
                                className='follower-link'
                                href={follower.html_url}
                                target='_blank'
                            >{follower.login}</Card.Link>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default UserFollowers;