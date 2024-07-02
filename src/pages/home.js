import './homeCSS.css';

function HomePage() {
  return (
    <div className='background'>
      <div className="overall-container">
      <header className="page-header">
        <h1>Home Page</h1>
      </header>
      <div class="card-container">
        <div class="card-timeline">
          <h2>Timeline</h2>
        </div>
        <div class="card-queue">
          <h2>Queue</h2>
        </div>
      </div>
      <div class="card-container">
        <div class="card-quotes">
          <h2>QuoTo</h2>
        </div>
        <div class="card-poetry">
          <h2>Poetry</h2>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default HomePage;
