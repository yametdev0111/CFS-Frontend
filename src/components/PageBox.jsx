import { Box } from "@mui/material"

export const PageBox = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        { children }
      </Box>
    </>
  )
}