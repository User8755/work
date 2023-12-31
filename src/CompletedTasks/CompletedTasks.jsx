/* eslint-disable array-callback-return */
import { NavLink } from 'react-router-dom';
import './CompletedTasks.css';
import Card from '../Card/card';
import NewTask from '../NewTask/newTask';
import '../CurrentTasks/CurrentTasks.css';

function CompletedTasks({
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
          <li className='aside__list-item'>
            <NavLink to='/in-progress' className='header__nav-link'>
              В работе
            </NavLink>
          </li>
          <li className='aside__list-item  active'>
            <NavLink to='/completed-tasks' className='header__nav-link'>
              Выполненные задачи
            </NavLink>
          </li>
        </ul>
        <button className='button button-aside' onClick={handlerOpenModal}>
          Новая задача
        </button>
      </aside>
      <section className='content completed'>
        {isTasks.map((item) => {
          if (item.inprogress === 'Завершена') {
            return (
              <Card
                key={item._id}
                tasks={item}
                setModal={setModal}
                setChild={setChild}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              />
            );
          }
        })}
      </section>
    </div>
  );
}

export default CompletedTasks;
