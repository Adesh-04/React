
import { Header, PropsHeader } from './components/header';
import { Home, PropsHome } from './components/home';
import './stylesheet/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home name={'mohit'} age={22} />
      <PropsHome name={'sam'} age={20}>
        <p>This is props.children </p>
      </PropsHome>
      <PropsHeader name={'sam'} age={20}>
        <p>This is class</p>
      </PropsHeader>
    </div>
  );
}

export default App;
