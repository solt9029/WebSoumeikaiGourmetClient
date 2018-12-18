import { connect } from 'react-redux';
import ShopList from '../components/ShopList';

const mapStateToProps = state => ({
  list: state.shop.list,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList);
