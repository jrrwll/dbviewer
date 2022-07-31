import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './util/component/AppRoute'
import { RouteItem } from './util/module/router'
import HomePage from './pages/HomePage'
import '@blueprintjs/core/lib/css/blueprint.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes: RouteItem<React.ComponentType<any>>[] = [{ path: '/', component: HomePage }]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRoute routes={routes} />
    </React.StrictMode>
)
