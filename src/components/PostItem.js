import './Card.css';
import './PostItem.css';
import Card from './Card';

function PostItem(props){
  return(
    <Card className="post-item">
        <div className='post-item-name'>{props.name}</div>
        <div className='post-item-title'>{props.title}</div>
        <div className='post-item-body'>{props.body}</div>
        <button className='delButton'>X</button>
    </Card>
  );
}

export default PostItem;