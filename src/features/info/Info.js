import upvoteImg from "../../app/images/up-long-solid.svg";
import downvoteImg from "../../app/images/down-long-solid.svg";
import './Info.css';

export const Info = ({upvotes, downvotes}) => {
  return (
    <div className="info">
      <div>
        <span><img src={upvoteImg}/>{upvotes}</span>
      </div>
      <div>
        <img src={downvoteImg}/><span>{downvotes}</span>
      </div>
    </div>
  );
}