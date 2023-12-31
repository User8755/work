import './App.css';
import { Route, Routes } from 'react-router-dom'
import CurrentTasks from '../CurrentTasks/CurrentTasks';
import InProgress from '../InProgress/InProgress';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import api from '../untils/api';

function App() {
  const [modal, setModal] = useState(false);
  const [child, setChild] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const [isTasks, setTasks] = useState([]);

  useEffect(() => {
    if (!modal) {
      setChild(null);
    }
  }, [modal]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((item) => setTasks(item))
      .catch((err) => console.log(err));
  }, []);
console.log(isTasks)
  return (
    <div className='App'>
      <Modal setModal={setModal} modal={modal} child={child}></Modal>
      <Routes>
        <Route
          path='/'
          element={
            <CurrentTasks
              modal={modal}
              setModal={setModal}
              setChild={setChild}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              isTasks={isTasks}
              setTasks={setTasks}
            ></CurrentTasks>
          }
        ></Route>
        {/*---вынесла в отдельный модуль---*/}
        <Route
          path='/in-progress'
          element={
            <InProgress
              modal={modal}
              setModal={setModal}
              setChild={setChild}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              isTasks={isTasks}
              setTasks={setTasks}
            ></InProgress>
          }
        ></Route>

        <Route
          path='/completed-tasks'
          element={
            <CompletedTasks
              modal={modal}
              setModal={setModal}
              setChild={setChild}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              isTasks={isTasks}
              setTasks={setTasks}
            ></CompletedTasks>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
