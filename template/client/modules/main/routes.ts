import type {RouteNode} from '../../core/types/types';

import {FirstScreen} from './first';
import {SecondScreen} from './second';

const routes: RouteNode = {
    path: 'MainRoutes',
    optionsNavigator: {
        type: 'tabs',
        options: {
            headerShown: false,
        }
    },
    children: [
        {
            path: 'First',
            component: FirstScreen
        },
        {
            path: 'Second',
            component: SecondScreen
        },
    ]
};


export default routes;