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
      <Label text="Please leave your contact information for the manager to reach you.
" />
      <Label text="" />

      <Label text="Name" />
      <InputBox value={name} func={setName} regexp={/^[a-zA-Z ]+$/} />

      <Label text="Email" />
      <InputBox value={email} func={setEmail} regexp={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} />

      <Label text="Phone" />
      <InputBox value={phone} func={setPhone} regexp={/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/}  />

      <SubmitButton onClick={onClick}>
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};