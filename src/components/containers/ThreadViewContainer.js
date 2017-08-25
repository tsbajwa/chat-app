import { connect } from 'react-redux';
import { deleteMessage, addMessage } from '../../redux/actionTypes';
import ThreadView from '../components/ThreadView'

const mapStateToThreadViewProps = (state) => {
  const thread = state.threads.find((t) => t.id === state.activeThreadId)
  return {
    thread,
  }
}

const mapDispatchToThreadViewProps = (dispatch) => (
  {
    onClick: (id) => (
      dispatch(deleteMessage(id))
    ),
    dispatch
  }
)

const mergeThreadViewProps = (stateProps, dispatchProps) => (
  {
    ...stateProps,
    ...dispatchProps,
    onSubmit: (message) => (
      dispatchProps.dispatch(addMessage(message, stateProps.thread.id))
    )
  }
)

export const ThreadViewContainer = connect(mapStateToThreadViewProps, mapDispatchToThreadViewProps, mergeThreadViewProps)(ThreadView)