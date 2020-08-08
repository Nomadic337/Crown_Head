import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../Redux/Shop/ShopActions';
import CollectionsOverviewContainer from '../../Component/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';



class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();

    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`}
                    component = {CollectionsOverviewContainer} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}    
                />
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);