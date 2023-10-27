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
      <Label text="Please leave any contact information for the manager to reach you." />
      <Label text="" />

      <Label text="Name" />
      <InputBox value={name} func={setName} inputProps="[A-Za-z\s]+" />

      <Label text="Email" />
      <InputBox value={email} func={setEmail} inputProps="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />

      <Label text="Phone" />
      <InputBox value={phone} func={setPhone} inputProps="^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$" />

      <SubmitButton onClick={onClick}>
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};