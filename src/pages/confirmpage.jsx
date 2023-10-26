import {
    Label,
    SubmitButton,
    BoxContainer,
} from "../components";
import { useDispatch } from "react-redux";

export const ConfirmPage = ( props ) => {
    const dispatch = useDispatch();
    const { onSubmit } = props;
    const onClick = () => {
        onSubmit();
        
    }
    return (
        <BoxContainer>
        <Label text="Successed! 🙂" />


        <SubmitButton onClick={onClick}>
            Confirm
        </SubmitButton>
        </BoxContainer>
    );
};