import Input from './Components/Input';
import Button from './Components/Button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(null);
 
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => prev === '0' ? number : prev + number);
  }

  const handleSetOperation = (op) => {
    if(currentNumber !== '0') {
      setFirstNumber(currentNumber);
    }
    setCurrentNumber('0');
    setOperation(op);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    console.log("🚀 firstNumber:", firstNumber)
    console.log("🚀 currentNumber:", currentNumber)
    console.log("🚀 operation:", operation)
  }

  const handleOnClearOp = () => {
    setOperation(null);
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  
  const handleOnBackSpace = () => {
    setCurrentNumber(prev => prev.length <= 1 ? '0' : prev.slice(0, -1));
    
  }

  const handleCalculate = () => {
    if (!operation || !firstNumber) {
      return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    switch (operation) {
      case '+':
        setCurrentNumber(String(num1 + num2));
        break;
      case '-':
        setCurrentNumber(String(num1 - num2));
        break;
      case '*':
        setCurrentNumber(String(num1 * num2));
        break;
      case '/':
        setCurrentNumber(String(num1 / num2));
        break;
      default:
        break;
    }

    setFirstNumber('0');
    setOperation(null);
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='BS' onClick={() => handleOnBackSpace()}/>
          <Button label='C' onClick={handleOnClearOp}/>
          <Button label='CE' onClick={handleOnClear} />
          <Button label='/' onClick={() => handleSetOperation('/')}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='x' onClick={() => handleSetOperation('*')}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='-' onClick={() => handleSetOperation('-')}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='+' onClick={() => handleSetOperation('+')}/>
        </Row>
        <Row>
          <Button label='⭐' fontSize='17px'/>
          <Button label='0' onClick={() => handleAddNumber('0')}/>
          <Button label='.' onClick={() => handleAddNumber('.')}/>
          <Button label='=' onClick={handleCalculate}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
