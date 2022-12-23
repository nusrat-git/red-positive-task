import Modal from 'react-modal';
import DataForm from './DataForm';

const ModalForm = ({ modalIsOpen, setIsOpen, refetch, closeModal }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={false}
                    contentLabel="Example Modal"
                >
                    <DataForm refetch={refetch} closeModal={closeModal}></DataForm>
                </Modal>
            </div>
        </div>
    );
};

export default ModalForm;