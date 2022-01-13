import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formState, selectForm } from "./formSlice";
import * as S from "./style";

const Form = () => {
  const [state, setState] = useState("");
  const handleChange = (event) => setState(event.target.value);

  const dispatch = useDispatch();
  //chamando valores dentro do reducer
  const forms = useSelector(selectForm);

  const handleSubmit = (event) => {
    event.preventDefault();

    //dispara uma action para modificar o valor
    dispatch(formState(state));
  };
  return (
    <S.DivFull>
      <div></div>

      <form onSubmit={handleSubmit}>
        <S.Input value={state} onChange={handleChange} type="text" />
      </form>
      <S.ValueForm>{forms}</S.ValueForm>
    </S.DivFull>
  );
};

export default Form;
