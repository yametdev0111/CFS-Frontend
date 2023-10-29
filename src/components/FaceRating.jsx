import styled from "@emotion/styled";
import { Box, Rating } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const StyledRating = styled( Rating )(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  // 1: {
  //   icon: <SentimentVeryDissatisfiedIcon sx={{color: "#FFC000"}} />
  // },
  // 2: {
  //   icon: <SentimentSatisfiedIcon sx={{color: "#FFC000"}} />
  // },
  // 3: {
  //   icon: <SentimentSatisfiedAltIcon sx={{color: "#FFC000"}} />
  // },
  1: {
    icon: <div style={{fontSize: 18}}>🙁</div> 
  },
  2: {
    icon: <div style={{fontSize: 18}}>😐</div>
  },
  3: {
    icon: <div style={{fontSize: 18}}>🙂</div> 
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
        <Box sx={{ ml: 2 }}> {text} </Box>
      </Box>
    </>
  )
}