/* eslint-disable array-callback-return */
import './CurrentTasks.css';
import Card from '../Card/card';
import newTasks from '../untils/newTask';
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
    setChild(<NewTask isTasks={isTasks} setTasks={setTasks} setModal={setModal} />);
  };

  return (
    <div className='current-tasks'>
      <button className='button' onClick={handlerOpenModal}>
        Новая задача
      </button>
      <h2>Приоритет</h2>
      <div className='current-tasks__continer'>
        <div className='current-tasks__hi'>
          <h2>Высокий</h2>
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
        <div className='current-tasks__mid'>
          <h2>Средний</h2>
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
        <div className='current-tasks__low'>
          <h2>Низкий</h2>
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
      </div>
      <h2>В работе</h2>
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
      </div>
    </div>
  );
}

export default CurrentTasks;
