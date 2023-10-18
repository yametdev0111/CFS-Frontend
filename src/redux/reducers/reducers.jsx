import { combineReducers } from "redux";
import review from "./coins";
import reviewnormal from './review_normal';
import reviewdetail from './review_detail';

export default combineReducers({
  review,
  reviewdetail,
  reviewnormal,
});
