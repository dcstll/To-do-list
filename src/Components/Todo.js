import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoListProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompletedState] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompletedState((oldCompleted) => !oldCompleted);
    };

    return (
        <div className="row ten wide">
            {isEditing ? (
                <div className="columns seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus
                            value={tempValue}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="column two wide">
                        <button
                            className={`ui button icon ${completedState ? "blue" : "green"
                                }`}
                            onClick={handleButtonClick}
                        >
                            <i className="white check icon" />
                        </button>
                    </div>

                    <div
                        className="column six wide"
                        onDoubleClick={handleDivDoubleClick}
                    >
                        <h2 className={`ui medium block header ${completedState ? "grey" : ""}`} id="task">
                            {value}
                        </h2>
                    </div>

                    <div className="column two wide">
                        <button onClick={removeTodoListProp} className="ui button icon red">
                            <i className="white remove icon"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Todo;