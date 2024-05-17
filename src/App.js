import SteveJobsText from './SteveJobsText';
import stevejobscover from './stevejobscover.jpg';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Steve Jobs biography</h1>
      <SteveJobsText/>
      <br/>
      <img className='img-responsive' src={stevejobscover} alt='Steve Jobs'/>
      
    </div>
  );
}

export default App;
