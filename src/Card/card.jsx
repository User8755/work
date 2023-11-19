import './card.css';
import ViewTask from '../ViewTask/ViewTask';
import { useLocation } from 'react-router-dom';

function Card(props) {
  const location = useLocation();
  const handlerClick = (item) => {
    props.setSelectedCard(item);
    props.setChild(
      <ViewTask
        selectedCard={item}
        setModal={props.setModal}
        setTasks={props.setTasks}
      ></ViewTask>
    );

    props.setModal(true);
  };
  console.log(props);
  return (
    <article
      className='card'
      onClick={() => {
        handlerClick(props.tasks);
      }}
    >
      <h3 className='card__title'>{props.tasks.task}</h3>
      <span className='card__span'>Приоритет: {props.tasks.priorities}</span>
      {location.pathname === '/completed-tasks' ? (
        <span>Ваполнено: {props.tasks.complite}</span>
      ) : (
        ''
      )}
    </article>
  );
}
export default Card;
