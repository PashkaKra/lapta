import { Modal } from "../Modal";
import "./style.css";

const RecordingForm = ({active, setActive}) => {
    
    return(
        <Modal active={active} setActive={setActive}>
            <form className="recordingForm">
                <input type="text"/>
                <input type="text"/>
                <button>Отправить</button>
            </form>
        </Modal>     
    );
}

export {RecordingForm}