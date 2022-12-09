import { PropaneSharp } from '@mui/icons-material';
import { connect } from 'react-redux';



function CompletedTask(props) {
    return (
        <>
            <input type='checkbox'
                onClick={props.onCompleted}
                defaultChecked={props.isHide}
            /> Hide completed
        </>
    )
};


let mapStateToProps = (state) => {
    console.log('hide', typeof state.isHide)
    return {
        isHide: state.isHide
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onCompleted: (id) => {
            dispatch({ type: 'HIDE_COMPLETED_TASKS' })
        }
    }


}



export default connect(mapStateToProps, mapDispatchToProps)(CompletedTask) 