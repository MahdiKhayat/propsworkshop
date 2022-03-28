import logo from './logo.svg';
import './App.css';

import { ProductList } from './Components/ProductList/ProductList';

function App() {

  const dataproduct = [
    { image:
      "https://img.creative.com/images/products/large/pdt_23668.png?width=400&height=400",
    name: "head Phone",
    price: "22$"},
    {image:
      "https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png",
    name: "head Phone",
    price: "1000 $"},
    { image:
      "https://resource.logitechg.com/e_trim/w_600,h_550,c_limit,q_auto,f_auto,dpr_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-white-gallery-1.png?v=1",
    name: "head Phone",
    price: "1000 $"},]
  
  return (
    <div className="App">
    <ProductList  dataproduct2={dataproduct} className='ProductCard' />
    </div>
  );
}

export default App;
