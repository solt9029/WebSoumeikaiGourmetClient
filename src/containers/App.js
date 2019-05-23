import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';
import { update } from '../actions/shop';

const mapStateToProps = state => ({
  keyword: state.shop.keyword,
  loading: state.shop.loading,
  list: state.shop.list,
});

const mapDispatchToProps = dispatch => ({
  update(keyword, area) {
    dispatch(update(keyword, area));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
