import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CurrentTasks/CurrentTasks.css';
import './InProgress.css';
import Card from '../Card/card';
import NewTask from '../NewTask/newTask';

function InProgress({
  setModal,
  setChild,
  setSelectedCard,
  selectedCard,
  isTasks,
  setTasks,
}) {
  const handlerOpenModal = () => {
    setModal(true);
    setChild(
      <NewTask isTasks={isTasks} setTasks={setTasks} setModal={setModal} />
    );
  };
  return (
    <div className='main-wrapper'>
      <aside className='aside'>
        <ul className='aside__list'>
          <li className='aside__list-item'>
            <NavLink to='/' className='header__nav-link'>
              Текущие задачи
            </NavLink>
          </li>
          <li className='aside__list-item active'>
            <NavLink to='/in-progress' className='header__nav-link'>
              В работе
            </NavLink>
          </li>
          <li className='aside__list-item'>
            <NavLink to='/completed-tasks' className='header__nav-link'>
              Выполненные задачи
            </NavLink>
          </li>
        </ul>
        <button className='button button-aside' onClick={handlerOpenModal}>
          Новая задача
        </button>
      </aside>
      <section className='content inprogress'>
        <h2 className='content__title'>В работе</h2>

        {isTasks.map((item) => {
          if (item.inprogress === 'В работе') {
            return (
              <Card
                key={item.task}
                tasks={item}
                setModal={setModal}
                setChild={setChild}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
                setTasks={setTasks}
              ></Card>
            );
          }
        })}
      </section>
    </div>
  );
}

export default InProgress;
