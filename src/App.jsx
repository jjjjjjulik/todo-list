const username = "Yuliia";
const isLoggedIn = false;

const App = () => {
  return (
    <>
      <h1 className="title">To Do List</h1>
      {isLoggedIn ? <p>hi, {username}</p> : <button>loggin</button>}
    </>
  );
};

export default App;
