import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './AddTask.module.css';


function AddTask(props) {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control className={styles.input}
                    style={{ border: '1px solid #FFCD04' }}
                    placeholder="Write here"
                    aria-label="Write here"
                    aria-describedby="basic-addon2"
                    value={props.value}
                    onChange={props.changeInputValue}

                />
                <Button variant="outline-secondary" id="button-addon2"
                    className={styles.add_task_button}
                    onClick={props.addTask}
                    disabled={props.disabled}
                >
                    Add
                </Button>
            </InputGroup>
            {props.hasError ? <p className={styles.invalid_content_message}>Task content can contain max 54 characters.</p> : null}

        </>
    )
};


let mapStateToProps = (state) => {
    return {
        value: state.inputValue,
        hasError: state.hasError,
        disabled: state.disabled
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue: (e) => {
            dispatch({ type: 'GET_INPUT_VALUE', value: e.target.value, input: e.target })
        },
        addTask: () => {
            dispatch({ type: 'ADD_TASK' })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask) 