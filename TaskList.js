import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
        const { title, id, status } = this.props;

        const taskArr = this.props[this.props.stateList];
        const taskList = taskArr.map((task, index) => {
            return (
                <Task key={index} index={index} tasks={task} />
            );
        });
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks.task
    };
};

export default connect(mapStateToProps)(TaskList);