const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">social Buttons</h1>
    <div className="button-container">
      <Button buttonText="like" className="likeBtn" />>
      <Button buttonText="comment" className="commentBtn" />>
      <Button buttonText="share" className="shareBtn" />>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
