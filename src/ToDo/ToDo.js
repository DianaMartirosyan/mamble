import { connect } from 'react-redux';
import styles from './ToDo.module.css';
import AddTask from '../AddTask/AddTask';
import RemoveTask from '../removeTask/RemoveTask';
import { useState } from 'react';
import Confirm from '../removeTask/Confirm';
import CompletedTask from '../Completed/CompletedTask';
import CheckSingleTask from '../checkSingleTask/CheckSingleTask';



function ToDo(props) {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.completedTask_section}>
                    <div>  <CompletedTask /> </div>

                </div>


                <div className={styles.todo_input_group}>

                    <h3 className={styles.todo_title}> Task</h3>
                    <AddTask />

                </div>


                <div className={styles.tasks_section}>
                    {props.tasks.length === 0 ? <div className={styles.first_mesage}>
                        <p className={styles.first_message_first_line}> Your life is a blank page. You write on it.</p>
                        <p className={styles.first_message_second_line}> So start by adding your tasks here.</p>

                    </div> :
                        props.tasks.map((task) => {
                            return (

                                <div key={task.id} className={`${styles.single_task} ${props.isHide && task.isCompleted ? styles.isCompleted : ''}`}>
                                    <div className={styles.left_side}>
                                        <CheckSingleTask id={task.id} task={task} />
                                        <span className={` ${task.isCompleted ? styles.selected : ''}`}>   {task.title} </span>
                                    </div>

                                    <div className={styles.right_side}>
                                        <span className={styles.delete_icon}>
                                            <RemoveTask id={task.id} />

                                        </span>
                                    </div>
                                    {props.openModal && <Confirm />}

                                </div>
                            )
                        })}
                </div>
            </section>
        </>
    )
};

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        value: state.inputValue,
        openModal: state.openModal,
        taskIndex: state.taskIndex,
        isHide: state.isHide
    }
}

export default connect(mapStateToProps, null)(ToDo) 