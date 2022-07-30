import {Navigate, Route} from 'react-router-dom';
import React from 'react';
import {renderRoutes, RouteItem} from './router';

export default function renderReactRoutes(
    routes: RouteItem<React.ComponentType<any>>[],
    currentPath: string
): React.ReactNode[] {
    const children = renderRoutes(routes, currentPath);
    const reactRoutes: React.ReactNode[] = [];
    children.forEach((item) => {
        if ('path' in item) {
            const { path, component } = item;
            reactRoutes.push(<Route key={path} path={path} element={React.createElement(component)}/>);
        } else {
            const { from, to } = item;
            reactRoutes.push(<Route key={from} path={from} element={ <Navigate to={to} /> } />)
        }
    });
    return reactRoutes;
}
