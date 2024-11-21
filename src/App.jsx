import { GlobalStyle } from './styles/global';
import { Header, Main } from './components';

function App() {
  return (
    <>
      <Header hideButton={false} title="Players List" />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
