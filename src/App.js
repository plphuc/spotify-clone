import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout=MainLayout
              if (route.layout){
                Layout=route.layout
              }

              return (
                <Route
                  key={index}
                  path={route.path} 
                  element={
                    <Layout>
                      <Page/>
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>  
      </Router>
  );
}

export default App;
