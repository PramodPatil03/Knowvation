import { Refine, WelcomePage} from "@refinedev/core";

import { dataProvider } from './providers/data-providers'
import {ShowProduct} from "./pages/Product/Show";
import { EditProduct } from "./pages/Product/Edit";
import { ShowList } from "./pages/Product/List";


function App(): JSX.Element {
  return (
    <Refine 
    dataProvider={dataProvider}
    >
      {/* <WelcomePage /> */}
      {/* <ShowProduct /> */}
      {/* <EditProduct /> */}
      <ShowList />
    </Refine>
  );
}

export default App;
