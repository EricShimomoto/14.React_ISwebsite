import './App.css';

function App() {
  const title = "Welcome!";
  const likes = 50;
  const link = "https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p>{ 10 }</p>
        <p>{"Hi Kidorans"}</p>
        <p>{[1,2,3,4,5,6,7]}</p>
        <p>{Math.random()*100}</p>

        <a href={link}>Google site</a>
        
      </div>
    </div>
  );
}

export default App;
