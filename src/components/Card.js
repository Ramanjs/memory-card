function Card(props) {

  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={props.url} className="image"/>
      <span className="name">{props.name}</span>
    </div>
  );
}

export default Card;
