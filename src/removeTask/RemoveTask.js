import { connect } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './RemoveTask.module.css';



function RemoveTask(props) {

    return (
        <>
            <button className={styles.delete_button} onClick={() => props.toggleModal(props.id)}>
                <ClearIcon />
            </button>

        </>
    )
};



let mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (clickedTaskId) => {
            dispatch({ type: 'OPEN_MODAL', id: clickedTaskId })
        }
    }

}

export default connect(null, mapDispatchToProps)(RemoveTask) 