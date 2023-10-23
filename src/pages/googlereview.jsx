import LogoIcon from "../assets/images/logo.png"
import {
  DrawerHeader,
  Label,
  LinkItem,
  SubmitButton,
  BoxContainer,
  PageContainer,
  PageBox
} from "../components";

const GoogleReviewPage = () => {

  const onSubmit = () => {
    window.location.href = "http://search.google.com/local/writereview?placeid=ChIJQU8OXXDYQIYRY7y5o327fiA";
  }

  return (
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        <BoxContainer>
          <Label text="We appreciate your feedback and 5-star rating! Our team aims to make our customers happy.🙂" />
          <Label text="Please also leave a public review on Google, so everyone can hear about what you liked.👇" />

          <SubmitButton onClick={onSubmit}>
            Review on Google
          </SubmitButton>
        </BoxContainer>
      </PageBox>
    </PageContainer>
  );
};

export default GoogleReviewPage;
