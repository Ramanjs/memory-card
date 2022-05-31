function Header(props) {

  return (
    <div className="header"> 
      <span>Current Score: {props.curScore}</span> |
      <span>Best Score: {props.bestScore}</span>
    </div>
  );
}

export default Header;
