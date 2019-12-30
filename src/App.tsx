import React from 'react';
import logo from './logo.svg';
import  {ButtonContainer as Button}  from 'react-typescript-button-master';
import { ReactComponent as Delete} from './assets/icon-delete.svg';
import { ReactComponent as Excel} from './assets/icon-excel.svg';
import { ReactComponent as Editar} from './assets/icon-edit.svg';
import { ReactComponent as Warning} from './assets/exclamation-triangle-solid.svg';
import './App.css';

const App: React.FC = () => {
  const [propiedades, setPropiedades] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="Col">
          <p>
            Button MASTER
          </p>
          <article>
            <Button onClick={() => setPropiedades('Button sin Props')}> Sin Props</Button>
            <Button 
              onClick={() => setPropiedades('fontColor -- fontHoverColor')}
              fontColor = {'#4a69bb'}
              fontHoverColor = {'#9aceff'}
            > Font Color
            </Button>
            <Button 
              onClick={() => setPropiedades('fontColor -- backgroundColor')}
              fontColor = {'#015668'}
              backgroundColor = {'#36abb5'}
            > backgroundColor
            </Button>
            <Button 
              onClick={() => setPropiedades('backgroundColor = #36abb5  --  backgroundHoverColor = #fe5e51')}
              backgroundColor = {'#fff'}
              fontColor = {'#c72c41'}
              fontHoverColor = {'#fff'}
              backgroundHoverColor = {'	#c72c41'}
            > backgroundHoverColor
            </Button>
            <Button 
              onClick={() => setPropiedades('transparent = true -- borderColor = #9e3d64 -- borderHoverColor = #f6db5f -- fontColor = #9e3d64 ')}
              transparent = {true}
              borderColor = {'#9e3d64'}
              borderHoverColor = {'#f6db5f'}
              fontColor = {'#9e3d64'}
            > Transparent
            </Button>
            <Button 
              onClick={() => setPropiedades('size = large')}
              size = {'large'}
            > Size Large
            </Button>
            <Button 
              onClick={() => setPropiedades('size = small')}
              size = {'small'}
            > Size Small
            </Button>
            <Button 
              onClick={() => setPropiedades('shape = round')}
              shape = {'round'}
            > Shape round
            </Button>
            <Button 
              onClick={() => setPropiedades('disabled = true')}
              disabled = {true}              
            > Disabled
            </Button>
            <Button 
              onClick={() => setPropiedades('Icon = componente.svg as ReactComponent -- shape = circle')}
              Icon = {Delete}
              borderHoverColor = {'#fe5e51'}
              backgroundColor = {'#36abb5'}
              shape = {'circle'}
              size = {'large'}
            > 
            </Button>

            <Button 
              onClick={() => setPropiedades('Icon -- paddingIconToText = 8 -- iconPosition = 0 ')}
              Icon = {Excel}
              paddingIconToText = {8}
              iconPosition = {0}
              fontColor = {'#fff'}
              backgroundColor = {'#008026'}
              borderColor = {'#fff'}
            > Text - Icon
            </Button>

            <Button 
              onClick={() => setPropiedades('Icon -- paddingIconToText = 8 -- iconPosition = 1 ')}
              Icon = {Excel}
              paddingIconToText = {8}
              iconPosition = {1}
              fontColor = {'#fff'}
              backgroundColor = {'#008026'}
              borderColor = {'#fff'}
            > Text - Icon
            </Button>
          </article>
        </div>
        <div className="Col">
          <p>
            Button SolBooking
          </p>
          <article>
            <Button 
              shape = {'round'}
            > FILTRAR REGISTROS
            </Button>

            <Button 
              Icon = {Editar}
              paddingIconToText = {8}
              iconPosition = {1}
              fontColor = {'#333645'}
              backgroundColor = {'#fff'}
              borderColor = {'#333645'}
              shape = {'round'}
            > CREAR AGENTE
            </Button>

            <Button
              Icon = {Warning}
              paddingIconToText = {8}
              backgroundColor = {'#fff'}
              fontColor = {'#c72c41'}
              fontHoverColor = {'#fff'}
              backgroundHoverColor = {'	#c72c41'}
              borderColor = {'#c72c41'}
              shape = {'round'}
              size = {'small'}
            > VALIDAR
            </Button>

            <Button
              transparent = {true}
              backgroundHoverColor = {'#04BBC2'}
              borderHoverColor = {'#04BBC2'}
              fontColor = {'#04BBC2'}
              fontHoverColor = {'#fff'}
            > Recuperar Cheque
            </Button>

            <Button
              transparent = {true}
              disabled = {true}
              backgroundHoverColor = {'#04BBC2'}
              borderHoverColor = {'#04BBC2'}
              fontColor = {'#04BBC2'}
              fontHoverColor = {'#fff'}
            > Recuperar Cheque
            </Button>
            
            <Button 
              fontColor = {'#fff'}
              backgroundColor = {'#04BBC2'}
            > CANJEAR CHEQUE
            </Button>
            
            <Button 
              Icon = {Excel}
              paddingIconToText = {8}
              iconPosition = {1}
              fillColor = {'#1D7E54'}
              fillHoverColor = {'#fff'}
              fontColor = {'#1D7E54'}
              fontHoverColor = {'#fff'}
              borderColor = {'#1D7E54'}
              backgroundColor = {'#fff'}
              backgroundHoverColor = {'#1D7E54'}
              shape = {'round'}
            > Exportar a Excel
            </Button>

          </article>
          
        </div>
        <div className="Col">
          <p>
            Propiedades
          </p>
          <span>
            {propiedades}
          </span>
        </div>
        
      </header>
      
    </div>
  );
}


export default App;
