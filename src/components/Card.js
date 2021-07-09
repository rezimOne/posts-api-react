function Card(props){
  const myClassName = 'card ' + props.className;

  return(
    <div className = {myClassName}>{props.children}
    </div>
  );
}

export default Card;