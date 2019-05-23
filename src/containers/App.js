import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';
import { update, fetchAllList } from '../actions/shop';

const mapStateToProps = state => ({
  keyword: state.shop.keyword,
  loading: state.shop.loading,
  list: state.shop.list,
  error: state.shop.error,
  allList: state.shop.allList,
  allListLoading: state.shop.allListLoading,
  allListError: state.shop.allListError,
  area: state.shop.area,
});

const mapDispatchToProps = dispatch => ({
  update(keyword, area) {
    dispatch(update(keyword, area));
  },
  fetchAllList() {
    dispatch(fetchAllList());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
