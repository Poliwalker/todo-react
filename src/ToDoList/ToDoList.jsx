import React, { useState, useEffect } from 'react';
import {
	ButtonTodoRemoveAll,
	ContainerTodo,
	FormTodo,
	InputTodo,
	ButtonAddInput,
	ContainerInputAndButton,
	ContainerRenderTask,
} from './ToDoListStyle';
import { GrAddCircle } from 'react-icons/gr';
import { IoTrashBinSharp } from 'react-icons/io5';

// obtener data del localStorage

const getLocalStorage = () => {
	let list = localStorage.getItem('lists');
	if (list) {
		return JSON.parse(localStorage.getItem('lists'));
	} else {
		return [];
	}
};

const ToDoList = () => {
	const [inputTask, setInputTask] = useState('');
	const [task, setTask] = useState(getLocalStorage());

	const addTask = (e) => {
		e.preventDefault();
		if (!inputTask) {
		} else {
			alert('se agregó nueva tarea');
			setTask([...task, inputTask]);
			setInputTask('');
		}
	};

	const deleteTask = (id) => {
		const updateTasks = task.filter((elem, ind) => {
			return ind !== id;
		});
		setTask(updateTasks);
	};

	const deleteTaskAll = () => {
		setTask([]);
	};

	// Agregar data al localStorage //

	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(task));
	}, [task]);

	return (
		<>
			<ContainerTodo>
				<h1>ADD TASK</h1>
				<FormTodo onSubmit={addTask}>
					<ContainerInputAndButton>
						<InputTodo
							placeholder="Agregar Tarea"
							type="text"
							value={inputTask}
							onChange={(e) => setInputTask(e.target.value)}
						/>
						<ButtonAddInput>
							<GrAddCircle onClick={addTask} />
						</ButtonAddInput>
					</ContainerInputAndButton>

					{task.map((elem, ind) => {
						return (
							<>
								<ContainerRenderTask key={ind}>
									<p>{elem}</p>
									<IoTrashBinSharp onClick={() => deleteTask(ind)} />
								</ContainerRenderTask>
							</>
						);
					})}
				</FormTodo>
				<ButtonTodoRemoveAll onClick={deleteTaskAll}>
					Borras tareas
				</ButtonTodoRemoveAll>
			</ContainerTodo>
		</>
	);
};

export default ToDoList;
