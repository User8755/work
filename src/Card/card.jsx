import './card.css';
import ViewTask from '../ViewTask/ViewTask';

function Card(props) {
  const handlerClick = (item) => {
    props.setSelectedCard(item);
    props.setChild(
      <ViewTask selectedCard={item} setModal={props.setModal} setTasks={props.setTasks}></ViewTask>
    );

    props.setModal(true);
  };

  return (
    <article
      className='card'
      onClick={() => {
        handlerClick(props.tasks);
      }}
    >
      <h3 className='card__title'>{props.tasks.task}</h3>
      <span className='card__span'>Приоритет: {props.tasks.priorities}</span>
      {/* <p className='card__description'>
        Описание задачи Описание задачи Описание задачи Описание задачи Описание
        задачи
      </p> */}
    </article>
  );
}
export default Card;
