import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../Redux/Shop/ShopSelector';
import CollectionsOverview from './CollectionsOverview';
import { compose } from 'redux';
import WithSpinner from '../WithSpinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;