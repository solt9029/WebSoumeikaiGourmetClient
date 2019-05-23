import { connect } from 'react-redux';
import Shop from '../components/Shop';
import { update } from '../actions/shop';

const mapStateToProps = state => ({
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
)(Shop);
