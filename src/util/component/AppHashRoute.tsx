import { HashRouter, Routes } from 'react-router-dom'
import React from 'react'
import renderReactRoutes from '../module/react-routes'
import { RouteItem } from '../module/router'

export interface AppRouteProps {
    routes: RouteItem<React.ComponentType<any>>[]
}

export default function AppHashRoute({ routes }: AppRouteProps) {
    const children = renderReactRoutes(routes, '/')
    return (
        <HashRouter>
            <Routes>{children}</Routes>
        </HashRouter>
    )
}
