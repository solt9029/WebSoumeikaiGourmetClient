import { connect } from 'react-redux';
import AppNavbar from '../components/AppNavbar';
import { update } from '../actions/shop';

const mapStateToProps = state => ({
  keyword: state.shop.keyword,
});

const mapDispatchToProps = dispatch => ({
  update(keyword) {
    dispatch(update(keyword));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavbar);
