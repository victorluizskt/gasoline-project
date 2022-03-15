import { Header } from './styles';
import Button from './Components/Atoms/Button';
import Title from './Components/Atoms/Title';

function App() {
  return (
    <div className="App">
      <Header>
        <Title title="Gasoline Calculator."/>
        <Button title="Click here" />
      </Header>
    </div>
  );
}

export default App;
