import { RouterProvider } from "react-router";
import { router } from "./router";
import { CardProvider } from "./Providers/useContext";

const App = () => {
  return (
    <div>
      <CardProvider>
        <RouterProvider router={router} />
      </CardProvider>
    </div>
  );
};

export default App;
