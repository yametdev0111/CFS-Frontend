import { Container } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receive, receiveDetailReview, receiveRecent } from "../redux/actions";
import './../App.css';
import { series, title } from "../constants";
import { useParams } from "react-router-dom";
// import { DEFAULT_X_AXIS_KEY, DEFAULT_Y_AXIS_KEY } from '@mui/x-charts/constants';
// import { exists } from "../redux/actions/user";

const valueFormatter = value => `${value===null?"0":value.toFixed(1)}%`;

export const AdminPage = () => {
  const chartSetting = {
    width: 350,
    height: 270,
  };
  // const company = useSelector(state => state.company);
  // const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const review_normal = useSelector(state => state.review);
  const review_detail = useSelector(state => state.reviewdetail);
  const recent = useSelector(state => state.reviewrecent);
  const [detail, setDetail] = useState(series);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    dispatch(receive(params.id));
    dispatch(receiveDetailReview(params.id));
    dispatch(receiveRecent(params.id, 0x7fff));
  }, [dispatch, params.id])

  useEffect(() => {
    // if(company !== params.id){
    //   console.log("Dismatch----------------->", company, params);
    //   navigate("/admin");
    // }
  })

  useEffect(() => {
    setDetail(review_detail.map(val => ({
      ...val,
      valueFormatter
    })));
  }, [review_detail])

  useEffect(() => {
    var sum = 0.0;
    review_normal.forEach( ( val, index ) => {
      const plus = val.percentage * (5 - index) / 100; 
      sum = sum + plus;
    } )
    setAverage(sum.toFixed(1));
  }, [review_normal])

  return (
    <Container
      maxWidth={false}
      sx={{
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Feedback Dashboard</h1>
      <h2>Feedback Review Summary</h2>
      <p>Average ⭐ Stars:{average}</p>
      <p>Total Reviews: {recent.length}</p>
      <BarChart
        dataset={review_normal}
        yAxis={[ {
          scaleType: 'band',
          dataKey: 'level'
        } ]}
        series={[ {
          dataKey: 'percentage',
          label: '⭐',
          color:"#D9D9D9",
          valueFormatter
        } ]}
        xAxis={[{
          label: 'Percentage (%)',
          min: 0,
          max: 100,
        }]}
        layout="horizontal"
        {...chartSetting}
      />
      <div style={{marginRight: `calc(100vw)`, minWidth: 500}}>
       <BarChart
        width="350"
        height={270}
        series={detail}
        yAxis={[{
          
          scaleType: 'band', 
          data: title,
        }]}
        xAxis={[{
          label: 'Percentage (%)',
          min: 0,
          max: 100,
        }]}
        layout="horizontal"
        // {...chartSetting}
      >
      </BarChart>
      </div>

      
      
      <table className="cfstable">
        <thead className="cfsrow">
          <td className="cfscell">Stars</td>
          <td className="cfscell">Comments</td>
          <td className="cfscell">Time</td>
          <td className="cfscell">Date</td>
          <td className="cfscell">Contact Info</td>
        </thead>
        {recent.reverse().map(val =>
          <tr className="cfsrow">
            <td className="cfscell">{val.rating}</td>
            <td className="cfscell">{val.review} <br/> {val.review_text}</td>
            <td className="cfscell">{val.createdAt.time}</td>
            <td className="cfscell">{val.createdAt.date}</td>
            <td className="cfscell">{val.name} <br/> {val.email} <br/> {val.phone}</td>
          </tr>
        )}
      </table>
    </Container>
  );
};