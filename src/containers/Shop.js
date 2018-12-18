import { connect } from 'react-redux';
import Shop from '../components/Shop';
import { update } from '../actions/shop';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  update(keyword) {
    dispatch(update(keyword));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
