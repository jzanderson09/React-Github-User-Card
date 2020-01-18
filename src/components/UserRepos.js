import React from 'react';
import { Card } from 'react-bootstrap';

const UserRepos = props => {
    return (
        <div className='UserRepos-container'>
            {props.repos.map(repo => {
                return (
                    <div classNam='repos'>
                        <Card style={{ width: '2rem' }}>
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