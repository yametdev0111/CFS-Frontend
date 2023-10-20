import { Container } from "@mui/material"

export const PageContainer = ({ children }) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        { children }
      </Container>
    </>
  )
}