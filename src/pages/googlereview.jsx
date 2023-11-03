import { Label, SubmitButton, BoxContainer } from "../components";
import GoogleSearch from "../assets/images/google.png";
export const GoogleReviewPage = (props) => {
  const { onSubmit, hasGoogle, button, logo } = props;

  const onClick = () => {
    window.open(
      hasGoogle
    );
    onSubmit();
  };

  return (
    <BoxContainer>
      <br />
      {logo !== null  && <img src={logo} style={{width: '350px'}} alt="logo" />}
      <br />
      <br />
      <Label text="We appreciate your feedback and 5-star rating! Our team aims to make our customers happy. Thank you. 🙂" />
      <br />
      {hasGoogle && (
        <>
          <Label text="Please also leave a public review on Google, so everyone can hear about what you liked.👇" />
          <SubmitButton onClick={onClick} button={button}>
            
            <img src={GoogleSearch} style={{ height: "25px"}} />
            &nbsp;&nbsp;Review on Google
          </SubmitButton>
        </>
      )}
    </BoxContainer>
  );
};
