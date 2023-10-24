import { useState } from "react";
import LogoIcon from "../assets/images/logo.png"
import { BoxContainer, DrawerHeader, InputBox, Label, LinkItem, PageBox, PageContainer } from "../components"


export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");

  return (
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        <BoxContainer>
          <Label text="Company Name" />
          <InputBox value={name} func={setName} />
          <Label text="Email" />
          <InputBox value={email} func={setEmail} />
          <Label text="Password" />
          <InputBox value={pass} func={setPass} password />
          <Label text="Password Confirm" />
          <InputBox value={repass} func={setRePass} password />
        </BoxContainer>
      </PageBox>
    </PageContainer>
  )
}