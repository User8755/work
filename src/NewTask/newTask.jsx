import { useState } from 'react';
import './newTask.css';
import api from '../untils/api';
function NewTask({ isTasks, setTasks, setModal }) {
  const [value, setValue] = useState({
    task: '', // задача
    priorities: '', // приоритет
    description: '', // описание
  });

  const handleChange = (evt) => {
    setValue({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    api
      .createTask(value)
      .then((item) => setTasks([...isTasks, item]))
      .catch((err) => console.log(err));
      setModal(false)
      console.log(isTasks)
  };

  return (
    <form className='form' onSubmit={handleSubmit} required>
      <h2 className='form__title'>Задача:</h2>
      <input
        className='form__input'
        name='task'
        value={value.task}
        onChange={handleChange}
        required
      ></input>
      <h2 className='form__title'>Описание задачи:</h2>
      <textarea
        type='text-area'
        onChange={handleChange}
        className='form__textarea'
        name='description'
        value={value.description}
        required
      ></textarea>
      <h2 className='form__title'>Приоритет</h2>
      <select onChange={handleChange} name='priorities' required>
        <option value=''></option>
        <option value='Высокий'>Высокий</option>
        <option value='Средний'>Средний</option>
        <option value='Низкий'>Низкий</option>
      </select>
      <input type='submit' className='button'></input>
    </form>
  );
}

export default NewTask;
