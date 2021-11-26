import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import Collection from "./Collection";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading:  state => !selectIsCollectionLoaded(state),
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)


export default CollectionContainer