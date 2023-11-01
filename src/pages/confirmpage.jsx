import {
  Label,
  SubmitButton,
  BoxContainer,
} from "../components";

export const ConfirmPage = ( props ) => {
  const { onSubmit, logo } = props;
  const onClick = () => {
    onSubmit();
  }
  return (
    <BoxContainer>
      <br />
      {logo !== '' && <img src={logo} style={{width: '65%'}} alt="logo" />}
      <br />
      <br />
      <Label text="We received your feedback. Thanks! 🙂" />
    </BoxContainer>
  );
};