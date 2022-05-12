import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";
import EventsModal from "./components/EventsModal";
import { useRegisterModal } from "./providers/RegisterModal";
import { customStyles } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

//Setando o pai do Modal, no nosso caso #root
Modal.setAppElement("#root");

function App() {
  const { modalIsOpen, closeModal, openModal } = useRegisterModal()

  return (
    <div className="App">
      <GlobalStyle />
      <button onClick={() => openModal()}>teste</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EventsModal />
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default App;
