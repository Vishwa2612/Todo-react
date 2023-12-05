import propTypes from "prop-types"

const ToDoList = ({todo,removeTaskWithIndex,index}) => {
    const handleButtonClick=()=>{
        removeTaskWithIndex(index);
    };
    return (
    <li>
        {todo} <button onClick={handleButtonClick}>Click</button>
    </li>
    );
};

ToDoList.propTypes = {
    todo: propTypes.string.isRequired,
    removeTaskWithIndex: propTypes.func.isRequired,
    index: propTypes.number.isRequired,
};

export default ToDoList



