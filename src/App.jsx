
import AppRoutes from "./Routes/AppRoutes"
import { Provider } from 'react-redux'
import store from "./Redux/store"

function App() {

  return (
    <div>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </div>
  )
}

export default App
