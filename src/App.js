import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import Cart from './pages/Cart'

export default function App() {

    return (
        <BrowserRouter>
            <Switch>    
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}