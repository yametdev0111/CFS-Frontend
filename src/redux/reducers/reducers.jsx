import { combineReducers } from "redux";
import review from "./coins";
import reviewrecent from "./review_recent";
import reviewnormal from './review_normal';
import reviewdetail from './review_detail';

export default combineReducers({
  review,
  reviewrecent,
  reviewdetail,
  reviewnormal,
});
