import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => { 
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
       );  
}
export default App