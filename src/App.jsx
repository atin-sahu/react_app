import { Counter } from "./component/Counter";
import { Dragdrop } from "./component/Dragdrop";
import { SelectSearch } from "./component/SelctSearch";
import { Provider } from "react-redux";
import store from '../src/redux/store';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
