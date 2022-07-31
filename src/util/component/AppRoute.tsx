import { BrowserRouter, Routes } from 'react-router-dom'
import React from 'react'
import renderReactRoutes from '../module/react-routes'
import { RouteItem } from '../module/router'

export interface AppRouteProps {
    routes: RouteItem<React.ComponentType<any>>[]
}

export default function AppRoute({ routes }: AppRouteProps) {
    const children = renderReactRoutes(routes, '/')
    return (
        <BrowserRouter>
            <Routes>{children}</Routes>
        </BrowserRouter>
    )
}
