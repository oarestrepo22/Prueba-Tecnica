import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/actions';
import { selectTasks } from '../redux/actions/selectors';
import { ListGroup } from 'react-bootstrap';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <ListGroup>
            {tasks.map((task) => (
                <ListGroup.Item key={task.id}>{task.title}</ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TaskList;
