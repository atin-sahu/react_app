import { Counter } from "./component/Counter";
import { Dragdrop } from "./component/Dragdrop";
import { SelectSearch } from "./component/SelctSearch";
import { Provider } from "react-redux";
import store from '../src/redux/store';
import { RegistarionFormik } from "./component/RegistarionFormik";

function App() {

  return (
    <div>
      <Provider store={store}>
        <div className="container-fluid">
          <h1 className="text-center">Welcome in our app</h1>
          <div className="mt-5">
            <RegistarionFormik></RegistarionFormik>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
