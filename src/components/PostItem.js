import './Card.css';
import './PostItem.css';
import Card from './Card';

function PostItem(props){
  return(
    <Card className="user-item">
      <div className='post-item'>
        <div className='post-item-title'>Title: {props.title}</div>
        <div className='post-item-body'>{props.body}</div>
      </div>
    </Card>
  );
}

export default PostItem;