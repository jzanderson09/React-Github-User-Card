import React from 'react';
import { Card } from 'react-bootstrap';
import './UserRepos.css';

const UserRepos = props => {
    return (
        <div className='UserRepos-container'>
            {props.repos.map(repo => {
                return (
                    <div className='repos' key={repo.id}>
                        <Card style={{ width: '100%' }}>
                            <Card.Link
                                href={repo.html_url}
                                target='_blank'
                            >
                            {repo.name}</Card.Link>
                        </Card>
                    </div>
                );
            })}   
        </div>
    );
};

export default UserRepos;