import './App.css';
import Landing from './Components/Landing';
import Greet from './Components/Greet';
import Follow from './Components/Follow';
import AxiosGet from './AxiosGet'
import AxiosPost from './AxiosPost';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Greet name='Naufal'>
        <p>We are ready to serve your needs</p>
      </Greet>
      <Follow/>
      <AxiosPost/>
      <AxiosGet/>
    </div>
  );
}

export default App;
