import { connect } from 'react-redux';

function CheckSingleTask(props) {

   return (
      <>
         <input type='checkbox'
            onClick={() => props.onCheck(props.id)}
            defaultChecked={props.task.isCompleted}
         />

      </>
   )
};



let mapDispatchToProps = (dispatch) => {
   return {
      onCheck: (id) => {
         dispatch({ type: 'ONCHECK_TASK', task_id: id });
      },

   }

}

export default connect(null, mapDispatchToProps)(CheckSingleTask) 