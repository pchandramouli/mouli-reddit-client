import './App.css';
import { Posts } from '../features/posts/Posts';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mouli Reddit Client</h1>
      </header>
      <section>
        <Posts></Posts>
      </section>
    </div>
  );
}

export default App;
