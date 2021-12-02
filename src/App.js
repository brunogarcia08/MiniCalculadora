import React, {useState} from 'react';
import styled from 'styled-components';
import  './App.css';


const Title = styled.h1`
    text-align:center;
    border-bottom:3px solid gray;
`;
const Input = styled.input`
    width:200px;
    height:20px;
    padding:10px;
    border:none;
    border-radius:10px;
    outline:0;
`;
const Line = styled.div`
    width:100%;
    height:2px;
    background-color:gray;
    margin:20px 0;
`;


function MiniCalculadora(){
    const [contaCliente, setContaCliente] = useState('');
    const [porcentagemGorjeta, setPorcentagemGorjeta] = useState('');
    const [valorPago, setValorPago] = useState('');
    const handleClick = ()=>{
      window.location.reload(true);
      let inputs = document.querySelectorAll('.inputsClear');

      for(let i = 0; i < inputs.length; i++){
          inputs[i].value=" ";  
      }
  };

  return(
    <div>
        <div className="boxCalculator">
          <Title className="title">Mini Calculadora 💰</Title>
          <p>Digite o valor da <strong>conta: </strong></p>
          <Input  className="inputsClear" type="number" autofocus="1" value={contaCliente} onChange={(e)=>setContaCliente(parseFloat(e.target.value))} />
          <p>Digite a porcentagem da <strong>gorjeta:</strong></p>
          <Input className="inputsClear"  type="number" value={porcentagemGorjeta} onChange={(e)=>setPorcentagemGorjeta(parseFloat(e.target.value))}/>
          <p>Digite o valor que o cliente <strong>pagou:</strong></p>
          <Input className="inputsClear"  type="number" value={valorPago} onChange={(e)=>setValorPago(parseFloat(e.target.value))} />
          <br/>
          <button onClick={handleClick}>Limpar 🧹</button>
          <Line></Line>
          {contaCliente > 0 &&
              <div>
                  <div className="boxResults">
                      <h3 className="account">Sub-Total: R$ {contaCliente}</h3>
                      <h3 className="tip">Gorjeta ({porcentagemGorjeta}%): R$ {(porcentagemGorjeta * contaCliente) / 100}</h3>
                      <h3 className="accountTotal">Total da conta: R$ {contaCliente + (porcentagemGorjeta * contaCliente) / 100}</h3>
                      <h3>Valor pago pelo cliente: R$ {valorPago}</h3>
                      <h3 className="customerChange">Troco do cliente: <span >R$ {valorPago - (contaCliente + ((porcentagemGorjeta * contaCliente) / 100 )) }</span></h3>
                  </div>
              </div>
          }
        </div>
    </div>
  );
};
export default MiniCalculadora;