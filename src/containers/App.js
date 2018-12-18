import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';
import { update } from '../actions/shop';

const mapStateToProps = state => ({
  keyword: state.shop.keyword,
  loading: state.shop.loading,
});

const mapDispatchToProps = dispatch => ({
  update(keyword) {
    dispatch(update(keyword));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
