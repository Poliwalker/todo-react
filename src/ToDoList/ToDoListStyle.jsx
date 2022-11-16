import styled from 'styled-components';

export const ContainerTodo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: #4747ff;
	color: #ffffff;
	padding-top: 100px;
`;

export const FormTodo = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InputTodo = styled.input`
	padding: 10px;
	width: 300px;
	height: 40px;
	margin-top: 20px;
	border-radius: 15px;
	outline: none;
	background-color: #ffffff;
	color: #858585;
	font-size: 15px;
	font-family: 'roboto';
	& ::placeholder {
		color: black;
	}
`;
export const ButtonTodoRemoveAll = styled.button`
	padding: 10px 50px;
	border-radius: 15px;
	margin-top: 10px;
	width: 320px;
	background: rgb(71, 71, 255);
	background: linear-gradient(
		333deg,
		rgba(71, 71, 255, 1) 21%,
		rgba(64, 28, 154, 1) 58%,
		rgba(62, 14, 120, 1) 95%
	);
	color: white;
	cursor: pointer;
	:hover {
		background: aliceblue;
		color: #131415;
	}
`;

export const ButtonAddInput = styled.button`
	font-size: 30px;
	background-color: #4747ff;
	color: #f1f1f1;
	border: none;
	cursor: pointer;
	display: flex;
	margin-top: 20px;
`;

export const ContainerInputAndButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
`;

export const ContainerRenderTask = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 100px;
	background-color: #1d1d9c;
	border-radius: 15px;
	padding: 5px 10px;
	margin-top: 15px;
	min-width: 200px;
`;
