import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Layout from './Layout';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

function App()
{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;