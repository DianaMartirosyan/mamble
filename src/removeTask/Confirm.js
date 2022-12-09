import { PropaneSharp } from '@mui/icons-material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import styles from './Confirm.module.css'



function Confirm(props) {
  return (
    <>
      <Modal
        show={true}
        onHide={props.toggleModal}
      >

        <Modal.Body style={{ textAlign: 'center' }}>
          <p className={styles.confirm_message}> Are you sure you want to delete? </p>
          <Button onClick={props.toggleModal} className={styles.cancel_button}>
            No
          </Button>
          <Button onClick={() => props.removeTask(props.taskId)} className={styles.confirm_button}> Yes</Button>
        </Modal.Body>
      </Modal>
    </>
  )
};

let mapStateToProps = (state) => {
  return {
    openModal: state.openModal,
    taskId: state.taskId
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (clickedTaskId) => {
      dispatch({ type: 'OPEN_MODAL', id: clickedTaskId })
    },

    removeTask: (clickedTaskId) => {
      dispatch({ type: 'DELETE_TASK', id: clickedTaskId })

    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm) 