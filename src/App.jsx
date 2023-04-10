import { Counter } from "./component/Counter";
import { Dragdrop } from "./component/Dragdrop";
import { SelectSearch } from "./component/SelctSearch";
import { Provider } from "react-redux";
import store from '../src/redux/store';
import { RegistarionFormik } from "./component/RegistarionFormik";
import Slider from "./component/Slider";

function App() {

  let arrImages = [
    {
      url:'https://media.istockphoto.com/id/1317939937/photo/soft-focus-doctor-working-to-laptop-computer-online-technology-marketing-business-of-medical.jpg?b=1&s=170667a&w=0&k=20&c=2wiGQGzuatvH-WpN9dPHviANYpfCECTfdLcrAD7Pby0=',
      alt:'first',
      name:'carousel1'
    },
    {
      url:'https://media.istockphoto.com/id/1317939937/photo/soft-focus-doctor-working-to-laptop-computer-online-technology-marketing-business-of-medical.jpg?b=1&s=170667a&w=0&k=20&c=2wiGQGzuatvH-WpN9dPHviANYpfCECTfdLcrAD7Pby0=',
      alt:'second',
      name:'carousel2'
    },
    {
      url:'https://media.istockphoto.com/id/1317939937/photo/soft-focus-doctor-working-to-laptop-computer-online-technology-marketing-business-of-medical.jpg?b=1&s=170667a&w=0&k=20&c=2wiGQGzuatvH-WpN9dPHviANYpfCECTfdLcrAD7Pby0=',
      alt:'third',
      name:'carousel3'
    }
  ]

  return (
    <div>
      <Provider store={store}>
        <div className="container-fluid">
          <h1 className="text-center">Welcome in our app</h1>
          <div className="mt-5">
            <Slider 
              arrImages={arrImages}
            ></Slider>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
