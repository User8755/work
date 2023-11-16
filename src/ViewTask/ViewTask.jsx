import { useState } from 'react';
import api from '../untils/api';

function ViewTask(props) {
  const [value, setValue] = useState({
    inprogress: '',
  });
  console.log(props.selectedCard._id);
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    console.log(value);
    api
      .updateTask(value, props.selectedCard._id)
      .then((item) => console.log(item))
      .catch((err) => console.log(err))
  };

  const handleChange = (evt) => {
    setValue({
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <form onSubmit={handlerSubmit} className='form'>
      <h2 className='form__title'>Задача:</h2>
      <span>{props.selectedCard.task}</span>
      <h2 className='form__title'>Описание:</h2>
      <span>{props.selectedCard.description}</span>
      <h2 className='form__title'>Приоритет:</h2>
      <span>{props.selectedCard.priorities}</span>
      <h2 className='form__title'>Статус:</h2>
      <select
        className='form__select'
        onChange={handleChange}
        name='inprogress'
      >
        <option value=''></option>
        <option value='В работе'>В работе</option>
        <option value='Завершена'>Завершена</option>
      </select>
      <button className='button' type='submit'>
        Изменить статус
      </button>
    </form>
  );
}

export default ViewTask;
