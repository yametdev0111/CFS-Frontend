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
      <Label text="Our team aims to make our customers happy. 
        Thank you for your feedback.🙂" />

      <SubmitButton onClick={onClick}>
      Confirm
      </SubmitButton>
    </BoxContainer>
  );
};