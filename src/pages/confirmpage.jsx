import {
    Label,
    SubmitButton,
    BoxContainer,
} from "../components";

export const ConfirmPage = ( props ) => {
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