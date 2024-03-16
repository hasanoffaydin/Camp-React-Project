import { Container } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layouts/Navi';
import DashBoard from './Layouts/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
        <DashBoard/>
      </Container>
    </div>
  );
}

export default App;
