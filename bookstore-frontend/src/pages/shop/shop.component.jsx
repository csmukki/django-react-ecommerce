import React from 'react';
import {connect} from 'react-redux';

import {getShopData} from '../../services/fakeCollectionService';
import { setCollections } from '../../redux/collection/collection.actions';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.setCollections(getShopData());
    }
    
    render() {
        return(
            <div className="shop-page">
                {
                    this.props.collections.map(({id, ...rest}) => (
                        <CollectionPreview key={id} {...rest} />
                    ))
                }
            </div>
        );
    }
}


const mapStateToProps = ({collection: {collections}}) => ({
    collections 
});


const mapDispatchToProps = dispatch => ({
    setCollections: collections => dispatch(setCollections(collections))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);