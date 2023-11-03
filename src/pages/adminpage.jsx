import { Container } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receive, receiveDetailReview, receiveRecent } from "../redux/actions";
import './../App.css';
import { series, title } from "../constants";
import { useParams, useNavigate } from "react-router-dom";
import { exists } from "../redux/actions/user";

const valueFormatter = value => `${value===null?"0":value.toFixed(1)}%`;

export const AdminPage = () => {
  const chartSetting = {
    width: 350,
    height: 270,
  };
  const company = useSelector(state => state.company.name);
  const isPaid = useSelector(state => state.company.isPaid);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const review_normal = useSelector(state => state.review);
  const review_detail = useSelector(state => state.reviewdetail);
  const recent = useSelector(state => state.reviewrecent);
  const [detail, setDetail] = useState(series);
  const [average, setAverage] = useState(0);
  const [logo, setLogo] = useState('');
  const [exsit, setExist] =useState(0);
  useEffect(() => {
    dispatch(receive(params.id));
    dispatch(receiveDetailReview(params.id));
    dispatch(receiveRecent(params.id, 0x7fff));
  }, [dispatch, params.id])
  useEffect(() => {
    exists(
      params.id,
      (result) => setExist(exsit + 1),
      (result) => {
        setLogo(result.logo);  
      }
    );
  }, [params.id]);
  // useEffect(() => {
  //   if(company !== params.id){
  //     const id = params.id;
  //     navigate(`/admin?id=${id}`);
  //   }
  // })

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
      }}
    >
      {logo !== null && <img src={logo} style={{width: '350px'}} alt="logo" />}
      <h1>Feedback Dashboard</h1>
      <h2>Results Summary:</h2>
      <p>Average ⭐ Stars:&nbsp;{average}</p>
      <p>Total Reviews: {recent.length}</p>
      <BarChart
        dataset={review_normal}
        yAxis={[ {
          scaleType: 'band',
          dataKey: 'level'
        } ]}
        series={[ {
          dataKey: 'percentage',
          label:  '⭐',
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
      <br/>
      <h2>Reactions to Services:</h2>
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

      <br/>
      <h2>Table of Comments:</h2>
      <div>
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
              {isPaid &&
                <td className="cfscell">
                  {val.name} <br/> {val.email} <br/> {val.phone}
                </td>
              }
              {!isPaid &&
                <td className="cfscell" style={{fontWeight: 'bold'}}>
                  "Upgrade Plan to Turn On"
                </td>
              }
            </tr>
          )}
        </table>
      </div>
      
    </Container>
  );
};