import logo from '../logo.svg';
import '../App.css';

function QuoToPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Quotes Page
            </h1>
            <h3>Quotes and/or Haikus with accompanying artwork and/or photos</h3>
      </header>
    </div>
  );
}

export default QuoToPage;
