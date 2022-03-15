import { Header } from './styles';
import CalculatorGasoline from './Components/Organism/CalculatorGasoline'
import Title from './Components/Atoms/Title';

function App() {
  return (
    <div className="App">
      <Header>
        <Title title="Gasoline Calculator."/>
        <CalculatorGasoline />
      </Header>
    </div>
  );
}

export default App;
