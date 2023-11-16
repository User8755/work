import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/header';
import CurrentTasks from '../CurrentTasks/CurrentTasks';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import CompletedTasks from '../CompletedTasks/CompletedTasks';

function App() {
  const [modal, setModal] = useState(false);
  const [child, setChild] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    if (!modal) {
      setChild(null);
    }
  }, [modal]);

  console.log(selectedCard);
  return (
    <div className='App'>
      <Modal setModal={setModal} modal={modal} child={child}></Modal>
      {/*<Header></Header>*/}
      <Routes>
        <Route
          path='/current-tasks'
          element={
            <CurrentTasks
              modal={modal}
              setModal={setModal}
              setChild={setChild}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
            ></CurrentTasks>
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
            ></CompletedTasks>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
