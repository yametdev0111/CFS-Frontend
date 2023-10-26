import {
  InputBox,
  Label,
  SubmitButton,
  BoxContainer,
} from "../components";

export const InfoPage = ( props ) => {
  const { name, setName, email, setEmail, phone, setPhone, onSubmit } = props;

  const onClick = () => {
    onSubmit();
  }

  return (
    <BoxContainer>
      <Label text="Please leave any contact information to make the manager reaches you." />
      <Label text="" />

      <Label text="Name" />
      <InputBox value={name} func={setName} />

      <Label text="Email" />
      <InputBox value={email} func={setEmail} />

      <Label text="Phone" />
      <InputBox value={phone} func={setPhone} />

      <SubmitButton onClick={onClick}>
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};