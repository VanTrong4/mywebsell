import Footer from "./components/footer/Footer";
import Sidebar from "./components/header/Sidebar";
import { ToastContainer } from "react-toastify";

function App({ children }) {
  return (
    <>
      <div className="App">
        <Sidebar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
