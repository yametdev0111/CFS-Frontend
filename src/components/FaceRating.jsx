import styled from "@emotion/styled";
import { Box, Rating } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled( Rating )(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon sx={{color: "#ED7D31"}} />
  },
  2: {
    icon: <SentimentSatisfiedIcon sx={{color: "#FFC000"}} />
  },
  3: {
    icon: <SentimentVerySatisfiedIcon sx={{color: "#70AD47"}} />
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const FaceRating = (props) => {
  const { text, rkey, value, func } = props;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 1
        }}
      >
        <StyledRating
          value={ value[rkey] }
          onChange={(event, newValue) => {
            func({
              ...value,
              [rkey]: newValue || 0
            });
          }}
          max={3}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
          size="large"
        />
        <Box sx={{ ml: 2, color: "white" }}> {text} </Box>
      </Box>
    </>
  )
}