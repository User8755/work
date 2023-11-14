/* eslint-disable array-callback-return */
import newTasks from '../untils/newTask';
import Card from '../Card/card';
function CompletedTasks({ setModal, setChild, setSelectedCard, selectedCard }) {
  return newTasks.map((item) => {
    if (item.completed) {
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
  });
}

export default CompletedTasks;
