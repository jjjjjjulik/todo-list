const username = "Yuliia";
const isLoggedIn = false;

const App = () => {
  return (
    <>
      <h1 className="title">To Do List</h1>
      {isLoggedIn ? <p>{username}</p> : <button></button>}
    </>
  );
};

export default App;
