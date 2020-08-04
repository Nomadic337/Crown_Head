import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Link, withRouter } from 'react-router-dom';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items, match }) => (
    <div className='collection-preview'>
        <Link className='title' to={`${match.path}/${title.toLowerCase()}`}>
            { title.toUpperCase()}
        </Link>
        <div className='preview'>
        {items
            .filter((item, idx) =>  idx < 4)
            .map(item => (
                <CollectionItem key={ item.id } item={ item } />
            ))
        }
        
        </div>
    </div>
);

export default withRouter(CollectionPreview);

