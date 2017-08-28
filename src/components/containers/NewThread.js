import { connect } from 'react-redux';
import { createThread } from '../../redux/actionTypes';
//import TextFieldSubmit from '../components/TextFieldSubmit';
import UpdateSubmit from '../components/UpdateSubmit';

const mapDispatchToTextFieldSubmitProps = (dispatch) => (
  {
    onSubmit: (title) => (
      dispatch(createThread(title))
    )
  }
)

export const NewThread = connect(null,mapDispatchToTextFieldSubmitProps)(UpdateSubmit)