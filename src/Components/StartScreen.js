function StartScreen({ numQuestions, dispatch }) {
  function handleClick() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome to the React quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery.</h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
