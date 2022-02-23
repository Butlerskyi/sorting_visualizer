import React from "react";
import { useArrElements, useArrLength, useShowInputs } from "../../hooks";
import "./arrForm.scss";

const ArrForm = ({ setBlocks }) => {
  const { arrLength, error, handleChange } = useArrLength();
  const { showInputs, inputsArr } = useShowInputs();
  const { addElToArray, transformArray, result } = useArrElements(inputsArr);

  return (
    <div className="arr__length__form__wrapper">
      <form className="arr__length__form">
        <input
          placeholder="enter array length (max 30)"
          onChange={handleChange}
          className="arr__length__form__input delay"
        />
        <button
          className="button submit"
          onClick={(e) => {
            showInputs(e, arrLength);
          }}
        >
          submit
        </button>
        {error ? <div className="error__text">{error}</div> : null}
      </form>
      {inputsArr.length > 0 ? (
        <form className="arr__values__form">
          <p>empty input or letter will be "0"</p>
          <div className="arr__values__inputs">
            {inputsArr.map((item, index) => {
              return (
                <input
                  className="arr__values__input delay"
                  key={index}
                  onChange={(e) => {
                    addElToArray(index, e.target.value);
                    transformArray(e);
                  }}
                />
              );
            })}
          </div>
          <button
            className="button submit2"
            onClick={(e) => {
              e.preventDefault();
              setBlocks(result);
            }}
          >
            save array
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default ArrForm;
