/* eslint-disable array-callback-return */
import './CurrentTasks.css';
import Card from '../Card/card';
/*import newTasks from '../untils/newTask';*/
import NewTask from '../NewTask/newTask';

function CurrentTasks({
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
    <div className='current-tasks'>
      <div className='main-wrapper'>
        <aside className='aside'>
          <ul className='aside__list'>
            <li className='aside__list-item'>Текущие задачи</li>
            <li className='aside__list-item'>В работе</li>
            <li className='aside__list-item'>Выполненные задачи</li>
          </ul>
          <button className='button' onClick={handlerOpenModal}>
            Новая задача
          </button>
        </aside>
        <div className='content'>
          <h2 className='content__title'>Приоритет</h2>
          {/*<div className='current-tasks__continer'>*/}
          <div className='current-tasks__hi task'>
            <h2 className='content__subtitle'>Высокий</h2>
            {isTasks.map((item) => {
              if (item.priorities === 'Высокий' && !item.inprogress) {
                return (
                  <Card
                    key={item.task}
                    tasks={item}
                    setModal={setModal}
                    setChild={setChild}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
                  />
                );
              }
            })}
          </div>

          <div className='current-tasks__mid task'>
            <h2 className='content__subtitle'>Средний</h2>
            {isTasks.map((item) => {
              if (item.priorities === 'Средний' && !item.inprogress) {
                return (
                  <Card
                    key={item.task}
                    tasks={item}
                    setModal={setModal}
                    setChild={setChild}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
                  ></Card>
                );
              }
            })}
          </div>

          <div className='current-tasks__low task'>
            <h2 className='content__subtitle'>Низкий</h2>
            {isTasks.map((item) => {
              if (
                item.priorities === 'Низкий' &&
                !item.inprogress &&
                !item.completed
              ) {
                return (
                  <Card
                    key={item.task}
                    tasks={item}
                    setModal={setModal}
                    setChild={setChild}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
                  ></Card>
                );
              }
            })}
          </div>
          {/*</div>*/}
        </div>
      </div>
      {/*<h2>В работе</h2>
      <div className='inprogress'>
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
              ></Card>
            );
          }
        })}
      </div>*/}
    </div>
  );
}

export default CurrentTasks;
