import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Fragment } from 'react';
import { createContext, useState } from 'react';

import './App.css';
import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout/MainLayout';


const apiProvider = createContext()
function App() {
  const [spotify, setSpotify] = useState(null)

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
              else if (route.layout === null){
                Layout=Fragment
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
