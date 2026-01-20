import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/font-awesome.min.css'
import '../src/css/themify-icons.css'
import '../src/css/flaticon.css'
import './App.css';
import '../src/css/responsive.css'
import AllRoute from './main-component/router'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Scrollbar from './components/scrollbar'

function App() {
  return (
    <div id="scrool">
      <AllRoute />
      <Footer />
      <Scrollbar />
    </div>
  )
}

export default App
