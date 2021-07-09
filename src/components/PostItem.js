import './Card.css';
import './PostItem.css';
import Card from './Card';

function PostItem(props){
  return(
    <Card className="user-item">
      <div className='post-item'>
        <div className='post-item-name'>Name: {props.name}</div>
        <div className='post-item-title'>mail: {props.email}</div>
        <div className='post-item-body'>phone: {props.phone}</div>
      </div>
    </Card>
  );
}

export default PostItem;