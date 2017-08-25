import { connect } from 'react-redux';
import { setActiveThread } from '../../redux/actionTypes';
import Tabs from '../components/Tabs';

const mapStateToTabsProps = (state) => {
  const tabs = state.threads.map((t) => ({
    title: t.title,
    active: t.id === state.activeThreadId,
    id: t.id,
  }))
  return {
    tabs,
  }
}

const mapDispatchToTabsProp = (dispatch) => (
  {
    onClick: (id) => {
      dispatch(setActiveThread(id))
    }
  }
)

export const ThreadTab = connect(mapStateToTabsProps, mapDispatchToTabsProp)(Tabs)