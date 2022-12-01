import ModalDialog from "./ModalDialog";

export default function DeleteModal(props){

    return(
        <ModalDialog
            header="Delete Kwek"
            body="Are you sure you want to delete your kwek?"
            firstButton="Cancel"
            secondButton="Delete"
            handleFirstButton={props.handleFirstButton}
            handleSecondButton={props.handleSecondButton}
        />
    )
}