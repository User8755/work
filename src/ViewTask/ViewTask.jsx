function ViewTask(props) {
  console.log(props);
  return (
    <>
      <h2>Задача:</h2>
      <span>{props.selectedCard.task}</span>
      <h2>Описание:</h2>
      <span>{props.selectedCard.description}</span>
      <h2>Приоритет:</h2>
      <span>{props.selectedCard.priorities}</span>
      <h2>Статус:</h2>
      <select>
        <option value=''></option>
        <option value='Ожидает'>Ожидает</option>
        <option value='В работе'>В работе</option>
      </select>
    </>
  );
}

export default ViewTask;
