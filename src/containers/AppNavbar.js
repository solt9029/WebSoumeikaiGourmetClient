import { connect } from 'react-redux';
import AppNavbar from '../components/AppNavbar';
import { update } from '../actions/shop';

const mapStateToProps = state => ({
  keyword: state.shop.keyword,
  area: state.shop.area,
});

const mapDispatchToProps = dispatch => ({
  update(keyword, area) {
    dispatch(update(keyword, area));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavbar);
