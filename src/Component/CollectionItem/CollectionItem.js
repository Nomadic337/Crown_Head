import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/CartActions';
import './CollectionItem.scss';
import CustomButtom from '../CustomButton/CustomButton';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    background: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <CustomButtom 
                className='custom-button' 
                onClick={() => addItem(item)} 
                inverted
            >
                Add to cart
            </CustomButtom>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);